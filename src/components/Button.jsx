import { useEffect, useRef } from 'react';
import PlaySound from '../functions/PlaySound';
import { useDispatch, useSelector } from 'react-redux';
import { setActivation } from '../features/button/buttonSlice';

const Button = ({ audioID, audioKey, audioURL }) => {
  const dispatch = useDispatch();
  const buttonContainer = useRef(null);

  useEffect(() => {
    const handleButtonPress = (event) => {
      if (event.key.toUpperCase() === audioKey) {
        PlaySound(audioKey);
        dispatch(setActivation(audioID));
        setTimeout(() => {
          dispatch(setActivation(audioID));
        }, 100);
        //TODO: update the display...
      }
    };

    //* Setup the event listener
    document.addEventListener('keydown', handleButtonPress);
    console.log('Added an event listener.');

    //* Handle playing the sound and stuff...

    //! Handle the cleanup of the setEventListener function.
    return () => {
      document.removeEventListener('keydown', handleButtonPress);
    };
  }, []);

  return (
    <>
      <button
        className='drum-pad btn col-3'
        id={audioID}
        onClick={() => {
          PlaySound(audioKey);
        }}
        ref={buttonContainer}
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
