import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  volume: 30,
};

const volumeSlice = createSlice({
  name: 'volume',
  initialState,
  reducers: {
    setVolume: (state, action) => {
      const newVolume = action.payload;
      state.volume = newVolume;
    },
  },
});

export const { setVolume } = volumeSlice.actions;

export default volumeSlice.reducer;
