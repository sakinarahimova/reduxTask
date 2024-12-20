import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { start, stop, reset, tick } from '../redux/stopwatchSlice';
import StopWatchStyle from './StopWatch.module.css';

const StopWatch = () => {
  const dispatch = useDispatch();
  const { second, minute, hour, isRunning } = useSelector((state) => state.stopwatch);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(tick());
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, dispatch]);

  const handleStartStop = () => {
    isRunning ? dispatch(stop()) : dispatch(start());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className={StopWatchStyle.main}>
      <div className={StopWatchStyle.container}>
        <h1>Stopwatch</h1>
        <div className={StopWatchStyle.text}>
          <p>{hour < 10 ? `0${hour}` : hour}</p>:
          <p>{minute < 10 ? `0${minute}` : minute}</p>:
          <p>{second < 10 ? `0${second}` : second}</p>
        </div>
        <div className={StopWatchStyle.buttons}>
          <button onClick={handleStartStop}>
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
