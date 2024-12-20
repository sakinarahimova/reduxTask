import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hour: '',
  minute: '',
  second: '',
  remainingHour: 0,
  remainingMinute: 0,
  remainingSecond: 0,
  isRunning: false,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTime(state, action) {
      const { hour, minute, second } = action.payload;
      state.hour = hour;
      state.minute = minute;
      state.second = second;
    },
    startTimer(state) {
      state.isRunning = true;
      state.remainingHour = state.hour === '' ? 0 : +state.hour;
      state.remainingMinute = state.minute === '' ? 0 : +state.minute;
      state.remainingSecond = state.second === '' ? 0 : +state.second;
    },
    stopTimer(state) {
      state.isRunning = false;
    },
    resetTimer(state) {
      state.hour = '';
      state.minute = '';
      state.second = '';
      state.remainingHour = 0;
      state.remainingMinute = 0;
      state.remainingSecond = 0;
      state.isRunning = false;
    },
    tick(state) {
      if (state.isRunning) {
        if (state.remainingSecond > 0) {
          state.remainingSecond -= 1;
        } else if (state.remainingMinute > 0 || state.remainingHour > 0) {
          if (state.remainingMinute > 0) {
            state.remainingMinute -= 1;
            state.remainingSecond = 59;
          } else if (state.remainingHour > 0) {
            state.remainingHour -= 1;
            state.remainingMinute = 59;
            state.remainingSecond = 59;
          }
        } else {
          state.isRunning = false;
          alert("Time's up!");
        }
      }
    },
  },
});

export const { setTime, startTimer, stopTimer, resetTimer, tick } = timerSlice.actions;
export default timerSlice.reducer;
