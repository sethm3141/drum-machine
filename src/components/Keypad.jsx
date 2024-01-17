import { useRef } from 'react';

const AUDIO_PATHS_DRUM = [
  'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  '../assets/audio/Heater-1.mp3',
  '../assets/audio/Heater-2.mp3',
];

const AUDIO_PATHS_PIANO = [];

const Keypad = () => {
  const QContainer = useRef(null);

  return (
    <section className='keypad container col-6'>
      <div className='row justify-content-evenly' style={{ height: '25%' }}>
        <button
          className='drum-pad btn col-3'
          id='heater-1'
          onClick={() => {
            // const audio = document.getElementById('Q')[0];
            // audio.play();
          }}
        >
          <audio className='clip' id='Q' ref={QContainer}>
            <source src={AUDIO_PATHS_DRUM[1]} />
          </audio>
          Q
        </button>
        <button className='drum-pad btn col-3' id='heater-2'>
          <audio
            className='clip'
            id='W'
            src={AUDIO_PATHS_DRUM[1]}
            type='audio'
          ></audio>
          W
        </button>
        <button className='drum-pad btn col-3' id='heater-3'>
          <audio
            className='clip'
            id='E'
            src='../assets/audio/Heater-3.mp3'
          ></audio>
          E
        </button>
      </div>
      <div className='row justify-content-evenly' style={{ height: '25%' }}>
        <button className='drum-pad btn col-3' id='heater-4'>
          <audio
            className='clip'
            id='A'
            src='../assets/audio/Heater-4_1.mp3'
          ></audio>
          A
        </button>
        <button className='drum-pad btn col-3' id='clap'>
          <audio
            className='clip'
            id='S'
            src='../assets/audio/Heater-6.mp3'
          ></audio>
          S
        </button>
        <button className='drum-pad btn col-3' id='open-hh'>
          <audio
            className='clip'
            id='D'
            src='../assets/audio/Dsc_Oh.mp3'
          ></audio>
          D
        </button>
      </div>
      <div className='row justify-content-evenly' style={{ height: '25%' }}>
        <button className='drum-pad btn col-3' id='kick-n-hat'>
          <audio
            className='clip'
            id='Z'
            src='../assets/audio/Kick_n_Hat.mp3'
          ></audio>
          Z
        </button>
        <button className='drum-pad btn col-3' id='kick'>
          <audio
            className='clip'
            id='X'
            src='../assets/audio/RP4_KICK_1.mp3'
          ></audio>
          X
        </button>
        <button className='drum-pad btn col-3' id='closed-hh'>
          <audio
            className='clip'
            id='C'
            src='../assets/audio/Cev_H2.mp3'
          ></audio>
          C
        </button>
      </div>
    </section>
  );
};
export default Keypad;
