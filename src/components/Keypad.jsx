const Keypad = () => {
  return (
    <section className='keypad container col-6'>
      <div className='row justify-content-evenly' style={{ height: '25%' }}>
        <button className='drum-pad btn col-3' id='heater-1'>
          <audio
            className='clip'
            id='Q'
            src='./src/assets/audio/Heater-1.mp3'
          ></audio>
          Q
        </button>
        <button className='drum-pad btn col-3' id='heater-2'>
          <audio
            className='clip'
            id='W'
            src='./src/assets/audio/Heater-2.mp3'
          ></audio>
          W
        </button>
        <button className='drum-pad btn col-3' id='heater-3'>
          <audio
            className='clip'
            id='E'
            src='./src/assets/audio/Heater-3.mp3'
          ></audio>
          E
        </button>
      </div>
      <div className='row justify-content-evenly' style={{ height: '25%' }}>
        <button className='drum-pad btn col-3' id='heater-4'>
          <audio
            className='clip'
            id='A'
            src='./src/assets/audio/Heater-4_1.mp3'
          ></audio>
          A
        </button>
        <button className='drum-pad btn col-3' id='clap'>
          <audio
            className='clip'
            id='S'
            src='./src/assets/audio/Heater-6.mp3'
          ></audio>
          S
        </button>
        <button className='drum-pad btn col-3' id='open-hh'>
          <audio
            className='clip'
            id='D'
            src='./src/assets/audio/Dsc_Oh.mp3'
          ></audio>
          D
        </button>
      </div>
      <div className='row justify-content-evenly' style={{ height: '25%' }}>
        <button className='drum-pad btn col-3' id='kick-n-hat'>
          <audio
            className='clip'
            id='Z'
            src='./src/assets/audio/Kick_n_Hat.mp3'
          ></audio>
          Z
        </button>
        <button className='drum-pad btn col-3' id='kick'>
          <audio
            className='clip'
            id='X'
            src='./src/assets/audio/RP4_KICK_1.mp3'
          ></audio>
          X
        </button>
        <button className='drum-pad btn col-3' id='closed-hh'>
          <audio
            className='clip'
            id='C'
            src='./src/assets/audio/Cev_H2.mp3'
          ></audio>
          C
        </button>
      </div>
    </section>
  );
};
export default Keypad;
