import Display from './Display';
import PowerSwitch from './PowerSwitch';
import VolumeSlider from './VolumeSlider';
import BankSwitch from './BankSwitch';

const ToggleSide = () => {
  return (
    <section className='toggle-side container col-6'>
      <PowerSwitch />
      <Display />
      <VolumeSlider />
      <BankSwitch />
    </section>
  );
};

export default ToggleSide;
