import React from "react";

const SelectInput = ({ children, selectClass }) => {
  return (
    <div className="input-field">
      <select className={selectClass}>
        <option value="" disabled selected>
          Choose your option
        </option>
        {children}
      </select>
    </div>
  );
};

export default SelectInput;
