import React from "react";

const SelectItem = ({ itemValue, itemText }) => {
  return <option value={itemValue}>{itemText}</option>;
};

export default SelectItem;
