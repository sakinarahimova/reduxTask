import { configureStore } from '@reduxjs/toolkit';
import clockReducer from './clockSlice';
import timerReducer from './timerSlice';
import stopwatchReducer from './stopwatchSlice';

const store = configureStore({
  reducer: {
    clock: clockReducer,
    timer: timerReducer,
    stopwatch: stopwatchReducer,
  },
});

export default store;
