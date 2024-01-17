const PowerSwitch = () => {
  return (
    <div
      class='toggle-switch form-check form-switch d-flex flex-column'
      id='power-switch'
    >
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
  );
};

export default PowerSwitch;
