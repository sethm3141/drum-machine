import Keypad from './components/Keypad';
import ToggleSide from './components/ToggleSide';

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
