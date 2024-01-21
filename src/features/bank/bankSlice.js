import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOn: false,
};

const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    switchBank: (state) => {
      state.isOn = !state.isOn;
    },
  },
});

export const { switchBank } = bankSlice.actions;

export default bankSlice.reducer;
