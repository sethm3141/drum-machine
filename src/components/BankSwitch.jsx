import { useDispatch, useSelector } from 'react-redux';
import { switchBank } from '../features/bank/bankSlice';

const BankSwitch = () => {
  const dispatch = useDispatch();
  const { isOn } = useSelector((store) => store.bank);

  return (
    <div
      className='toggle-switch form-check form-switch d-flex flex-column'
      id='bank-switch'
    >
      <label className='form-check-label' htmlFor='bankCheckbox'>
        Bank
      </label>
      <input
        className='form-check-input'
        type='checkbox'
        id='bankCheckbox'
        checked={isOn}
        onChange={() => {
          dispatch(switchBank());
        }}
      />
    </div>
  );
};

export default BankSwitch;
