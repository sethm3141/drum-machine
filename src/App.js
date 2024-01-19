import { useEffect } from 'react';
import './assets/css/index.css';
import Keypad from './components/Keypad';
import ToggleSide from './components/ToggleSide';
import { useDispatch } from 'react-redux';
import { setActiveKey } from './features/drumPad/drumPadSlice';
import { VALID_KEYS } from './data';

function App() {
  const dispatch = useDispatch();

  const updateActiveKey = (e) => {
    if (VALID_KEYS.find((element) => element == e.key)) {
      dispatch(setActiveKey(e.key.toUpperCase()));
    }
  };

  useEffect(() => {
    console.log('We added an event listener...');
    document.addEventListener('keypress', updateActiveKey);
  }, []);

  return (
    <div className='container card' id='drum-machine'>
      <section className='header d-flex flex-row'>
        <h1>FCC</h1>
        <i className='fa-brands fa-free-code-camp'></i>
      </section>
      <section className='body container row'>
        <Keypad />
        <ToggleSide />
      </section>
    </div>
  );
}

export default App;
