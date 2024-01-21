import { createSlice } from '@reduxjs/toolkit';
import { AUDIO_DRUMS, AUDIO_PIANO } from '../../data';

const initialState = {
  audioToPlay: AUDIO_DRUMS,
  drums: AUDIO_DRUMS,
  piano: AUDIO_PIANO,
  isDrums: true,
};

const drumPadSlice = createSlice({
  name: 'drumPad',
  initialState,
  reducers: {
    switchAudioToPlay: (state) => {
      if (state.isDrums) {
        state.audioToPlay = state.piano;
        state.isDrums = !state.isDrums;
      } else {
        state.audioToPlay = state.drums;
        state.isDrums = !state.isDrums;
      }
    },
  },
});

export const { switchAudioToPlay } = drumPadSlice.actions;

export default drumPadSlice.reducer;
