import { useDispatch, useSelector } from 'react-redux';
import { setVolume } from '../features/volume/volumeSlice';
import { useEffect, useRef } from 'react';
import { setText, emptyText } from '../features/display/displaySlice';

const VolumeSlider = () => {
  const dispatch = useDispatch();
  const { volume } = useSelector((store) => store.volume);
  const isMounted = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    clearTimeout(timeoutRef.current);
    dispatch(setText('volume: ' + volume));
    timeoutRef.current = setTimeout(() => {
      dispatch(emptyText());
    }, 5000);

    //! You must run clean up on functions like setTimeout()
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [volume]);

  return (
    <div className='slider'>
      <input
        type='range'
        className='form-range'
        id='volumeSlider'
        value={volume}
        onChange={(e) => {
          e.preventDefault();
          const newVolume = e.target.value;
          dispatch(setVolume(newVolume));
        }}
      />
    </div>
  );
};

export default VolumeSlider;
