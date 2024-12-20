import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTime, startTimer, stopTimer, resetTimer, tick } from '../redux/timerSlice';
import TimerStyle from './Timer.module.css';

const Timer = () => {
  const dispatch = useDispatch();
  const { hour, minute, second, remainingHour, remainingMinute, remainingSecond, isRunning } =
    useSelector((state) => state.timer);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => dispatch(tick()), 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, dispatch]);

  const handleStart = () => {
    dispatch(startTimer());
  };

  const handleReset = () => {
    dispatch(resetTimer());
  };

  const handleStop = () => {
    dispatch(stopTimer());
  };

  return (
    <div className={TimerStyle.timerContainer}>
      <div className={TimerStyle.timerCard}>
        <h1 className={TimerStyle.timerHeading}>Set a Timer</h1>
        <div className={TimerStyle.main}>
          <div className={TimerStyle.timerInput}>
            <div className={TimerStyle.inputValues}>
              <p>Hour</p>
              <p>Minute</p>
              <p>Second</p>
            </div>
            <div className={TimerStyle.inputTime}>
              <input
                className={TimerStyle.input}
                type="number"
                value={hour}
                onChange={(e) =>
                  dispatch(setTime({ hour: e.target.value, minute, second }))
                }
                disabled={isRunning}
              />
              :
              <input
                className={TimerStyle.input}
                type="number"
                value={minute}
                onChange={(e) =>
                  dispatch(setTime({ hour, minute: e.target.value, second }))
                }
                disabled={isRunning}
              />
              :
              <input
                className={TimerStyle.input}
                type="number"
                value={second}
                onChange={(e) =>
                  dispatch(setTime({ hour, minute, second: e.target.value }))
                }
                disabled={isRunning}
              />
            </div>
            <div className={TimerStyle.inputButton}>
              <button
                className={TimerStyle.button}
                onClick={handleStart}
                disabled={isRunning}
              >
                Start
              </button>
              <button className={TimerStyle.button} onClick={handleReset}>
                Reset
              </button>
              <button className={TimerStyle.button} onClick={handleStop}>
                Stop
              </button>
            </div>
          </div>
          <div className={TimerStyle.outputCard}>
            <div className={TimerStyle.output}>
              <p>{isRunning ? remainingHour : hour || "0"}</p>:
              <p>{isRunning ? remainingMinute : minute || "0"}</p>:
              <p>{isRunning ? remainingSecond : second || "0"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
