const BankSwitch = () => {
  return (
    <div
      className='toggle-switch form-check form-switch d-flex flex-column'
      id='bank-switch'
    >
      <label className='form-check-label' htmlFor='bankCheckbox'>
        Bank
      </label>
      <input className='form-check-input' type='checkbox' id='bankCheckbox' />
    </div>
  );
};

export default BankSwitch;
