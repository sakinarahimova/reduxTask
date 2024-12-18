import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startTimer, stopTimer, resetTimer, tick } from '../redux/timerSlice';

function Timer() {
  const dispatch = useDispatch();
  const { seconds, running } = useSelector((state) => state.timer);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => dispatch(tick()), 1000);
    }
    return () => clearInterval(interval);
  }, [running, dispatch]);

  return (
    <div>
      <h1>Timer</h1>
      <h2>{seconds}s</h2>
      <button onClick={() => dispatch(startTimer())}>Start</button>
      <button onClick={() => dispatch(stopTimer())}>Stop</button>
      <button onClick={() => dispatch(resetTimer())}>Reset</button>
    </div>
  );
}

export default Timer;
