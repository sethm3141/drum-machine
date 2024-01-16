import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const volumeSlice = createSlice({
  name: 'volume',
  initialState,
  reducers: {},
});

export const {} = volumeSlice.actions;

export default volumeSlice.reducer;
