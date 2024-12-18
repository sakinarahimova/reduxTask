import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  startStopwatch,
  stopStopwatch,
  resetStopwatch,
  tickStopwatch,
} from '../redux/stopwatchSlice';

function Stopwatch() {
  const dispatch = useDispatch();
  const { seconds, running } = useSelector((state) => state.stopwatch);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => dispatch(tickStopwatch()), 1000);
    }
    return () => clearInterval(interval);
  }, [running, dispatch]);

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>{seconds}s</h2>
      <button onClick={() => dispatch(startStopwatch())}>Start</button>
      <button onClick={() => dispatch(stopStopwatch())}>Stop</button>
      <button onClick={() => dispatch(resetStopwatch())}>Reset</button>
    </div>
  );
}

export default Stopwatch;
