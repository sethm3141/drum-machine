import './assets/css/index.css';
import Keypad from './components/Keypad';

function App() {
  return (
    <div className='container card' id='drum-machine'>
      <section className='header d-flex flex-row'>
        <h1>FCC</h1>
        <i className='fa-brands fa-free-code-camp'></i>
      </section>
      <section className='body container row'>
        <Keypad />
        <section className='toggle-side container col-6'>
          <div class='toggle-switch form-check form-switch d-flex flex-column'>
            <label class='form-check-label' for='powerCheckbox'>
              Power
            </label>
            <input
              class='form-check-input'
              type='checkbox'
              id='powerCheckbox'
              checked
            />
          </div>
          <div id='display'>Kick</div>
          <div className='slider'>Slider</div>
          <div class='toggle-switch form-check form-switch d-flex flex-column'>
            <label class='form-check-label' for='bankCheckbox'>
              Bank
            </label>
            <input class='form-check-input' type='checkbox' id='bankCheckbox' />
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
