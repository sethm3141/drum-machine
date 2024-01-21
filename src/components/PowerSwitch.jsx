import { useDispatch, useSelector } from 'react-redux';
import { switchPower } from '../features/power/powerSlice';

const PowerSwitch = () => {
  const dispatch = useDispatch();
  const { isOn } = useSelector((store) => store.power);

  return (
    <div
      className='toggle-switch form-check form-switch d-flex flex-column'
      id='power-switch'
    >
      <label className='form-check-label' htmlFor='powerCheckbox'>
        Power
      </label>
      <input
        className='form-check-input'
        type='checkbox'
        id='powerCheckbox'
        checked={isOn}
        onChange={() => {
          dispatch(switchPower());
        }}
      />
    </div>
  );
};

export default PowerSwitch;
