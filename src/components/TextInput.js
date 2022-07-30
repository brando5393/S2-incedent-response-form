import React from "react";

const textInput = ({ placeholderText, id, type, className, labelText }) => {
  return (
    <div className="input-field">
      <input
        placeholder={placeholderText}
        id={id}
        type={type}
        className={className}
      />
      <label htmlFor={id} className="active">
        {labelText}
      </label>
    </div>
  );
};

export default textInput;
