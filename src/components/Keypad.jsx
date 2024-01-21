import { useEffect, useRef } from 'react';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { switchAudioToPlay } from '../features/drumPad/drumPadSlice';

const Keypad = () => {
  const dispatch = useDispatch();
  const { audioToPlay } = useSelector((store) => store.drumPad);
  const { isOn } = useSelector((store) => store.bank);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    dispatch(switchAudioToPlay());
  }, [isOn]);

  return (
    <section className='keypad container col-6'>
      <div className='row justify-content-evenly' style={{ height: '25%' }}>
        <Button
          audioID={audioToPlay[0].id}
          audioKey={audioToPlay[0].key}
          audioURL={audioToPlay[0].url}
        />
        <Button
          audioID={audioToPlay[1].id}
          audioKey={audioToPlay[1].key}
          audioURL={audioToPlay[1].url}
        />
        <Button
          audioID={audioToPlay[2].id}
          audioKey={audioToPlay[2].key}
          audioURL={audioToPlay[2].url}
        />
      </div>
      <div className='row justify-content-evenly' style={{ height: '25%' }}>
        <Button
          audioID={audioToPlay[3].id}
          audioKey={audioToPlay[3].key}
          audioURL={audioToPlay[3].url}
        />
        <Button
          audioID={audioToPlay[4].id}
          audioKey={audioToPlay[4].key}
          audioURL={audioToPlay[4].url}
        />
        <Button
          audioID={audioToPlay[5].id}
          audioKey={audioToPlay[5].key}
          audioURL={audioToPlay[5].url}
        />
      </div>
      <div className='row justify-content-evenly' style={{ height: '25%' }}>
        <Button
          audioID={audioToPlay[6].id}
          audioKey={audioToPlay[6].key}
          audioURL={audioToPlay[6].url}
        />
        <Button
          audioID={audioToPlay[7].id}
          audioKey={audioToPlay[7].key}
          audioURL={audioToPlay[7].url}
        />
        <Button
          audioID={audioToPlay[8].id}
          audioKey={audioToPlay[8].key}
          audioURL={audioToPlay[8].url}
        />
      </div>
    </section>
  );
};
export default Keypad;
