import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTime } from '../redux/clockSlice';

function Clock() {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.clock.time);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div>
      <h1>Current Time</h1>
      <h2>{time}</h2>
    </div>
  );
}

export default Clock;
