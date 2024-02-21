// import React, { useState, useRef } from 'react';
// import { CountdownCircleTimer } from 'react-countdown-circle-timer';

// const TimerComponent = () => {
//     const [duration, setDuration] = useState(60); // Initial duration in seconds
//     const [isPaused, setIsPaused] = useState(false); // State to track whether timer is paused or not
//     const [savedTimers, setSavedTimers] = useState([]); // State to store saved timers

//     const countdownRef = useRef(null);

//     // Function to handle start/pause timer
//     const handleStartPause = () => {
//         setIsPaused(prevState => !prevState);
//     };

//     // Function to handle save timer
//     const handleSaveTimer = () => {
//         const currentTime = countdownRef.current.getElapsedTime(); // Get elapsed time
//         setSavedTimers(prevTimers => [...prevTimers, currentTime]); // Save elapsed time
//     };

//     return (
//         <div>
//             <div>
//                 <input
//                     type="number"
//                     value={duration}
//                     onChange={(e) => setDuration(e.target.value)}
//                     disabled={isPaused} // Disable input when timer is paused
//                 />
//                 <button onClick={handleStartPause}>{isPaused ? 'Resume' : 'Pause'}</button>
//                 <button onClick={handleSaveTimer}>Save Timer</button>
//             </div>
//             <div>
//                 <CountdownCircleTimer
//                     isPlaying
//                     duration={7}
//                     colors={['#004777', '#F7B801', '#A30000', '#A30000']}
//                     colorsTime={[7, 5, 2, 0]}
//                 >
//                     {({ remainingTime }) => remainingTime} {/* Render remaining time */}
//                 </CountdownCircleTimer>
//             </div>
//             <div>
//                 {/* Display saved timers */}
//                 <h2>Saved Timers:</h2>
//                 <ul>
//                     {savedTimers.map((timer, index) => (
//                         <li key={index}>{timer}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default TimerComponent;
