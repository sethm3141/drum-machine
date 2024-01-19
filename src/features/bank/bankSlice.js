import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOn: false,
};

const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    turnOnBank: (state) => {
      state.isOn = true;
    },
    turnOffBank: (state) => {
      state.isOn = false;
    },
  },
});

export const { turnOnBank, turnOffBank } = bankSlice.actions;

export default bankSlice.reducer;
