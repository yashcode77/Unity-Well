// import React, { useState, useRef } from 'react';
// import { CountdownCircleTimer } from 'react-countdown-circle-timer';

// const PomodoroTimer = () => {
//     const [time, setTime] = useState(1 * 60); // Initial time (25 minutes in seconds)
//     const [isPlaying, setIsPlaying] = useState(false); // State to track whether the timer is running or paused

//     const countdownRef = useRef(null);

//     // Function to handle start/pause timer
//     const handleStartPause = () => {
//         setIsPlaying(prevState => !prevState);
//     };

//     // Function to handle time change
//     const handleTimeChange = (event) => {
//         const newTime = parseInt(event.target.value) * 60; // Convert minutes to seconds
//         setTime(newTime);
//     };

//     return (
//         <div>
//             <div>
//                 <input
//                     type="number"
//                     value={time / 60} // Convert time back to minutes for display
//                     onChange={handleTimeChange}
//                     disabled={isPlaying} // Disable input when timer is running
//                 /> minutes
//                 <button onClick={handleStartPause}>{isPlaying ? 'Pause' : 'Start'}</button>
//             </div>
//             <div>
//                 <CountdownCircleTimer
//                     isPlaying={isPlaying}
//                     duration={time}
//                     onComplete={() => console.log('Timer completed')}
//                     colors={[['#A30000']]}
//                     strokeWidth={6}
//                     size={200}
//                 >
//                     {({ remainingTime }) => remainingTime}
//                 </CountdownCircleTimer>
//             </div>
//         </div>
//     );
// };

// export default PomodoroTimer;
