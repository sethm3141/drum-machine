const BankSwitch = () => {
  return (
    <div class='toggle-switch form-check form-switch d-flex flex-column' id="bank-switch">
      <label class='form-check-label' for='bankCheckbox'>
        Bank
      </label>
      <input class='form-check-input' type='checkbox' id='bankCheckbox' />
    </div>
  );
}

export default BankSwitch