import Keypad from './components/Keypad';
import ToggleSide from './components/ToggleSide';

//TODO: Only two last things I can think of doing are these two random bugs:
//TODO:     0. Fix the volume feature!
//TODO:     1. When I click on a button with my mouse, it get's .focus()'ed and then if I ever press the same button, except with a keydown press from the keyboard, after playing the sound, the button will come back without a border since it's inheriting some sort of style now that it's focused
//TODO:     2. When the slider is moved for the volume, it seems that if you try and drag it really far to the right or left past the slider ends, the display will pop up fast and then go away before the timeout 5 seconds.
//! I think number 2 is fixed!

function App() {
  return (
    <div className='container card' id='drum-machine'>
      <section className='header d-flex flex-row'>
        <h1>SDM</h1>
        {/* <i className='fa-brands fa-free-code-camp'></i> */}
        <i className='fa-solid fa-ice-cream'></i>
      </section>
      <section className='body container row'>
        <Keypad />
        <ToggleSide />
      </section>
    </div>
  );
}

export default App;
