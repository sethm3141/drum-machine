import { useEffect, useRef } from 'react';
import Button from './Button';
import { useSelector } from 'react-redux';
import PlaySound from '../functions/PlaySound';

const Keypad = () => {
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
    const playedAudio = document.getElementById(activeKey);

    // //* 'activate' the DOM pieces that we grabbed above
    PlaySound(activeKey, playedAudio.id);
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
