import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {},
});

export const {} = bankSlice.actions;

export default bankSlice.reducer;
