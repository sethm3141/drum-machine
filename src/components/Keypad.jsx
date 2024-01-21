import { useEffect, useRef } from 'react';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import PlaySound from '../functions/PlaySound';
import { setActivation } from '../features/drumPad/drumPadSlice';

const Keypad = () => {
  const dispatch = useDispatch();
  const { audio, activeKey, timeStamp } = useSelector((store) => store.drumPad);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    //* Grab the DOM that involves the <audio> and <button>
    const clickedButton = document.getElementById(
      audio.find((audioElement) => audioElement.key === activeKey).id
    );

    // //* 'activate' the DOM pieces that we grabbed above
    PlaySound(activeKey);

    //TODO: I need to (I think) setup clean up for any created listener events (downkey press) and for the setTimeout function... Then I think I need to setup 9 separate listener events for the downkey press event. One for each button, in order to handle when multiple keys are pressed at the same time. Maybe make a buttonSlice.js???

    //TODO: update the display here...

    dispatch(setActivation(clickedButton.id));
    setTimeout(() => {
      dispatch(setActivation(clickedButton.id));
    }, 100);
  }, [activeKey, timeStamp]);

  return (
    <section className='keypad container col-6'>
      <div className='row justify-content-evenly' style={{ height: '25%' }}>
        <Button
          audioID={audio[0].id}
          audioKey={audio[0].key}
          audioURL={audio[0].url}
        />
        <Button
          audioID={audio[1].id}
          audioKey={audio[1].key}
          audioURL={audio[1].url}
        />
        <Button
          audioID={audio[2].id}
          audioKey={audio[2].key}
          audioURL={audio[2].url}
        />
      </div>
      <div className='row justify-content-evenly' style={{ height: '25%' }}>
        <Button
          audioID={audio[3].id}
          audioKey={audio[3].key}
          audioURL={audio[3].url}
        />
        <Button
          audioID={audio[4].id}
          audioKey={audio[4].key}
          audioURL={audio[4].url}
        />
        <Button
          audioID={audio[5].id}
          audioKey={audio[5].key}
          audioURL={audio[5].url}
        />
      </div>
      <div className='row justify-content-evenly' style={{ height: '25%' }}>
        <Button
          audioID={audio[6].id}
          audioKey={audio[6].key}
          audioURL={audio[6].url}
        />
        <Button
          audioID={audio[7].id}
          audioKey={audio[7].key}
          audioURL={audio[7].url}
        />
        <Button
          audioID={audio[8].id}
          audioKey={audio[8].key}
          audioURL={audio[8].url}
        />
      </div>
    </section>
  );
};
export default Keypad;
