import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOn: true,
};

const powerSlice = createSlice({
  name: 'power',
  initialState,
  reducers: {
    switchPower: (state) => {
      state.isOn = !state.isOn;
    },
  },
});

export const { switchPower } = powerSlice.actions;

export default powerSlice.reducer;
