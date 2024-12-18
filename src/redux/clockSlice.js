import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  time: new Date().toLocaleTimeString(),
};

const clockSlice = createSlice({
  name: 'clock',
  initialState,
  reducers: {
    updateTime(state) {
      state.time = new Date().toLocaleTimeString();
    },
  },
});

export const { updateTime } = clockSlice.actions;
export default clockSlice.reducer;
