import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  second: 0,
  minute: 0,
  hour: 0,
  isRunning: false,
};

const stopwatchSlice = createSlice({
  name: 'stopwatch',
  initialState,
  reducers: {
    start(state) {
      state.isRunning = true;
    },
    stop(state) {
      state.isRunning = false;
    },
    reset(state) {
      state.isRunning = false;
      state.second = 0;
      state.minute = 0;
      state.hour = 0;
    },
    tick(state) {
      state.second += 1;
      if (state.second === 60) {
        state.second = 0;
        state.minute += 1;
        if (state.minute === 60) {
          state.minute = 0;
          state.hour += 1;
        }
      }
    },
  },
});

export const { start, stop, reset, tick } = stopwatchSlice.actions;
export default stopwatchSlice.reducer;
