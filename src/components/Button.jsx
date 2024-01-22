import { useEffect, useRef, useState } from 'react';
import PlaySound from '../functions/PlaySound';
import { setText } from '../features/display/displaySlice';
import { useDispatch, useSelector } from 'react-redux';

const Button = ({ audioID, audioKey, audioURL }) => {
  const dispatch = useDispatch();
  const timeoutRef = useRef(null);
  const [active, setActive] = useState('');
  const { isOn } = useSelector((store) => store.power);
  const { isDrums } = useSelector((store) => store.drumPad);
  const { volume: setVolume } = useSelector((store) => store.volume);

  const handleButtonPress = (event = audioKey) => {
    if (event?.key?.toUpperCase() === audioKey || event === audioKey) {
      //* activate the active styles
      setActive('sdm-active-btn');
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setActive('');
      }, 100);

      if (isOn) {
        //* Play the audio
        PlaySound(audioKey, setVolume);

        //* update the display
        dispatch(setText(audioID.replace(/-/g, ' ')));
      }
    }
  };

  useEffect(() => {
    //* Setup the event listener and handle playing the sound and stuff...
    document.addEventListener('keydown', handleButtonPress);
    console.log('Added an event listener.');

    //! Handle the cleanup of the setEventListener function.
    return () => {
      document.removeEventListener('keydown', handleButtonPress);
      clearTimeout(timeoutRef.current);
    };
  }, [isOn, isDrums, setVolume]);

  return (
    <>
      <button
        className={`drum-pad btn col-3 ${active}`}
        id={audioID}
        onClick={() => {
          handleButtonPress();
        }}
      >
        <audio
          className='clip'
          id={audioKey}
          src={audioURL}
          preload='metadata'
        />
        {audioKey}
      </button>
    </>
  );
};

export default Button;
