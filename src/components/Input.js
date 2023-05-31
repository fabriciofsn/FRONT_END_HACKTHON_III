import React from "react";
import { DivInput } from "../styles/Input";

const Input = ({ type = "", placeholder = "", required = "" }) => {
  return (
    <DivInput>
      <input type={type} placeholder={placeholder} />
    </DivInput>
  );
};

export default Input;
