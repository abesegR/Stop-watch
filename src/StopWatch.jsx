import React, { useState, useEffect, useRef } from "react";

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.cuurent = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.cuurent);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);

    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <>
      <div className="container">
        <div className="timer">{formatTime()}</div>
        <div className="btn">
          <button onClick={start} className="btns btn1">
            Start
          </button>
          <button onClick={stop} className="btns btn2">
            Stop
          </button>
          <button onClick={reset} className="btns btn3">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default StopWatch;
