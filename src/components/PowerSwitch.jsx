const PowerSwitch = () => {
  return (
    <div
      className='toggle-switch form-check form-switch d-flex flex-column'
      id='power-switch'
    >
      <label className='form-check-label' htmlFor='powerCheckbox'>
        Power
      </label>
      <input className='form-check-input' type='checkbox' id='powerCheckbox' />
    </div>
  );
};

export default PowerSwitch;
