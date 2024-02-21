import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";
import IconButton from "@mui/material/IconButton";

import History from "./History";
import TargetChart from "./TragetChart";
import MeditationSound from "../../assets/audio/MeditationSound.mp3";
import { getWeeklyData } from "../../redux/dashboard/DashboardAction";
import { addMeditation } from "../../redux/daily-activities/DailyActivitiesActions";

import "../../styles/pages/daily-activities/MeditationTracker.scss";

const MeditationTracker = () => {
  // const weeklyData = useSelector((store) => store.dashboard.weeklyData);
  // const weeklyData = useSelector((store) => store.dashboard.weeklyData || []);
  const weeklyData = [];
  // const user = useSelector((store) => store.profile.user || {});
  const user = {};

  // const user = useSelector((store) => store.profile.user);
  const dispatch = useDispatch();

  // Weekly Data API
  useEffect(() => {
    dispatch(getWeeklyData("user/weeklyactivity", {}));
  }, []);

  const [targetData, setTargetData] = useState([0.055, 10, 40, 7, 20, 20, 20]);
  useEffect(() => {
    if (weeklyData.length > 0) {
      let td = [];
      weeklyData.forEach((element) => {
        td.push(Math.ceil(element.activity.meditation));
      });

      setTargetData(td);
    }
  }, [weeklyData]);

  const [running, setRunning] = useState(false);
  const [currentTimeSec, setCurrentTimeSec] = useState(0);
  const [currentTimeMin, setCurrentTimeMin] = useState(0);
  const [history, setHistory] = useState([]);
  const [countKey, setCountKey] = useState(0);

  useEffect(() => {
    setHistoryState();
  }, []);

  const setHistoryState = () => {
    if (localStorage.meditationTime) {
      setHistory(localStorage.meditationTime.split("|"));
    } else {
      setHistory([]);
    }
  };

  const formatTime = (val, ...rest) => {
    let value = val.toString();
    if (value.length < 2) {
      value = "0" + value;
    }
    if (rest[0] === "ms" && value.length < 3) {
      value = "0" + value;
    }
    return value;
  };

  // Stopwatch
  const [watch, setWatch] = useState(null);
  const start = () => {
    if (!running) {
      let audio = document.getElementById("med-audio");
      setRunning(true);
      setWatch(
        setInterval(() => {
          setCurrentTimeSec((currentTimeSec) => currentTimeSec + 1);
        }, 1000)
      );
      audio.play();
    }
  };

  useEffect(() => {
    if (currentTimeSec >= 60) {
      setCurrentTimeMin((currentTimeMin) => currentTimeMin + 1);
      setCurrentTimeSec(0);
    }
  }, [currentTimeSec]);

  const stop = () => {
    let audio = document.getElementById("med-audio");
    setRunning(false);
    clearInterval(watch);
    setHistoryState();
    audio.pause();
  };

  const saveToLocalStorage = () => {
    if (localStorage.meditationTime) {
      localStorage.meditationTime =
        `${formatTime(currentTimeMin)}:${formatTime(
          currentTimeSec
        )} :: ${new Date().toLocaleTimeString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit",
        })}` +
        " | " +
        localStorage.meditationTime;
    } else {
      localStorage.meditationTime = `${formatTime(currentTimeMin)}:${formatTime(
        currentTimeSec
      )} :: ${new Date().toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
      })} `;
    }
  };

  const reset = () => {
    let audio = document.getElementById("med-audio");
    audio.pause();
    audio.currentTime = 0;
    if (typeof Storage !== "undefined") {
      saveToLocalStorage();
    } else {
      console.error("local storage not supported");
    }

    const totalSec = currentTimeMin * 60 + currentTimeSec;
    let day = new Date().getDay();
    const newTargetData = [...targetData];
    newTargetData[day] =
      (targetData[day] != undefined ? targetData[day] : 0) + totalSec;
    setTargetData(newTargetData);

    const body = {
      meditation: totalSec,
    };
    dispatch(addMeditation("user/addmeditation", body));

    let newKey = countKey + 1;
    setCurrentTimeSec(0);
    setCurrentTimeMin(0);
    setRunning(false);
    setCountKey(newKey);

    clearInterval(watch);
    setHistoryState();
  };

  // for history card height
  const [historyCardHeight, setHistoryCardHeight] = useState(0);
  useEffect(() => {
    let leftCard = document.querySelector("#leftCard");
    if (leftCard) {
      setHistoryCardHeight(leftCard.clientHeight);
    }
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={5}
      margin={8}
    >
      <Grid item xs={12} sm={6}>
        <Card id="leftCard" className="whiteBox meditationCard border-black">
          <CountdownCircleTimer
            key={countKey}
            isPlaying={running}
            duration={60}
            colors="#d9d9d9"
            trailColor="#51ab55"
            strokeWidth="12"
            size={140}
            onComplete={() => {
              return { shouldRepeat: true, delay: 0 };
            }}
          >
            {({ remainingTime }) =>
              running === false ? (
                <IconButton onClick={start}>
                  <PlayArrowOutlinedIcon className="play-icon" />
                </IconButton>
              ) : (
                <IconButton onClick={stop}>
                  <PauseOutlinedIcon className="play-icon" />
                </IconButton>
              )
            }
          </CountdownCircleTimer>

          <div className="stopwatch">
            {formatTime(currentTimeMin)}:{formatTime(currentTimeSec)}
          </div>

          <div onClick={reset} className="endSessionButton cursor-pointer p-1">
            End Session
          </div>
          <audio id="med-audio" loop src={MeditationSound}></audio>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6}>
        <div
          style={{
            maxHeight: historyCardHeight,
            overflowY: "auto",
            border: "1px solid #ccc",
          }}
        >
          <Card className="whiteBox historyCard">
            <History time={history} tab="meditation" />
          </Card>
        </div>
      </Grid>

      <Grid item xs={12}>
        <Card className="whiteBox targetCard">
          <TargetChart
            color="#51ab55"
            data={targetData}
            goal={user.meditationGoal}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default MeditationTracker;

// src/App.js
// MeditationTracker.jsx
// MeditationTracker.jsx
// import React, { useState } from "react";
// import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import Chart from "./Chart";

// function MeditationTracker() {
//   const [isTimerRunning, setIsTimerRunning] = useState(false);
//   const [meditationDuration, setMeditationDuration] = useState(0);
//   const [meditationData, setMeditationData] = useState([]);

//   const startTimer = () => {
//     setIsTimerRunning(true);
//     // Set duration to a high value to make sure the timer keeps running until stopped
//     setMeditationDuration(3600); // 3600 seconds = 1 hour (adjust as needed)
//   };

//   const stopTimer = (event) => {
//     event.preventDefault(); // Prevent the default form submission or anchor tag navigation
//     setIsTimerRunning(false);
//     // Store the elapsed time as the meditation duration
//     setMeditationData([...meditationData, meditationDuration]);
//     setMeditationDuration(0);
//   };

//   const resetTimer = () => {
//     setIsTimerRunning(false);
//     setMeditationDuration(0);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h1 className="text-3xl mb-4">Meditation Tracker</h1>
//       <CountdownCircleTimer
//         isPlaying={isTimerRunning}
//         duration={meditationDuration}
//         colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
//         onComplete={stopTimer}
//       >
//         {({ remainingTime }) => remainingTime}
//       </CountdownCircleTimer>
//       <div className="flex mt-4">
//         <button
//           onClick={startTimer}
//           className="mr-4 px-4 py-2 bg-green-500 text-white rounded"
//         >
//           Start
//         </button>
//         <button
//           onClick={stopTimer}
//           className="mr-4 px-4 py-2 bg-red-500 text-white rounded"
//         >
//           Stop
//         </button>
//         <button
//           onClick={resetTimer}
//           className="px-4 py-2 bg-blue-500 text-white rounded"
//         >
//           Reset
//         </button>
//       </div>
//       <Chart data={meditationData} />
//     </div>
//   );
// }

// export default MeditationTracker;
