import { useDispatch } from 'react-redux';
import { setActivation } from '../features/drumPad/drumPadSlice';

const PlaySound = (audioKey, audioID) => {
  // const dispatch = useDispatch();
  const audioClip = document.getElementById(audioKey);
  audioClip.currentTime = 0;
  // dispatch(setActivation(audioID));
  audioClip.play();
  // setTimeout(() => {
  //   dispatch(setActivation(audioID));
  // }, 100);
  //TODO: update the display here...
};

export default PlaySound;
