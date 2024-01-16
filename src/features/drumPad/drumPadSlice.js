import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const drumPadSlice = createSlice({
  name: 'drumPad',
  initialState,
  reducers: {},
});

export const {} = drumPadSlice.actions;

export default drumPadSlice.reducer;
