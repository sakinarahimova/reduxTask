import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  seconds: 0,
  running: false,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startTimer(state) {
      state.running = true;
    },
    stopTimer(state) {
      state.running = false;
    },
    resetTimer(state) {
      state.seconds = 0;
      state.running = false;
    },
    tick(state) {
      if (state.running) state.seconds += 1;
    },
  },
});

export const { startTimer, stopTimer, resetTimer, tick } = timerSlice.actions;
export default timerSlice.reducer;
