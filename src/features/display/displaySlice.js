import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {},
});

export const {} = displaySlice.actions;

export default displaySlice.reducer;
