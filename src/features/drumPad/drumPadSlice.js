import { createSlice } from '@reduxjs/toolkit';
import { AUDIO_DRUMS, AUDIO_PIANO } from '../../data';

const initialState = {
  audio: AUDIO_DRUMS,
};

const drumPadSlice = createSlice({
  name: 'drumPad',
  initialState,
  reducers: {
    setAudio: (state, action) => {
      state.audio = action.payload;
    },
  },
});

export const { setAudio } = drumPadSlice.actions;

export default drumPadSlice.reducer;
