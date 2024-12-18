import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  seconds: 0,
  running: false,
};

const stopwatchSlice = createSlice({
  name: 'stopwatch',
  initialState,
  reducers: {
    startStopwatch(state) {
      state.running = true;
    },
    stopStopwatch(state) {
      state.running = false;
    },
    resetStopwatch(state) {
      state.seconds = 0;
      state.running = false;
    },
    tickStopwatch(state) {
      if (state.running) state.seconds += 1;
    },
  },
});

export const { startStopwatch, stopStopwatch, resetStopwatch, tickStopwatch } =
  stopwatchSlice.actions;
export default stopwatchSlice.reducer;
