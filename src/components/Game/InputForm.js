import React from "react";

const InputForm = ({ value, setValue, onSubmit, disabled }) => {
  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        disabled={disabled}
        type="text"
        value={value}
        onChange={(event) => {
          if (event.target.value.length > 5) {
            return;
          }
          setValue(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
};

export default InputForm;
