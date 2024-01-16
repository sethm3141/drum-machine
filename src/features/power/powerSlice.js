import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const powerSlice = createSlice({
  name: 'power',
  initialState,
  reducers: {},
});

export const {} = powerSlice.actions;

export default powerSlice.reducer;
