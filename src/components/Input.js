import React from "react";
import { DivInput } from "../styles/Input";

const Input = ({ type = "", placeholder = "" }) => {
  return (
    <DivInput>
      <input type={type} placeholder={placeholder} />
    </DivInput>
  );
};

export default Input;
