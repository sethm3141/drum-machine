import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOn: true,
};

const powerSlice = createSlice({
  name: 'power',
  initialState,
  reducers: {
    turnOnPower: (state) => {
      state.isOn = true;
    },
    turnOffPower: (state) => {
      state.isOn = false;
    },
  },
});

export const { turnOnPower, turnOffPower } = powerSlice.actions;

export default powerSlice.reducer;
