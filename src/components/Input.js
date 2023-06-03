import React from "react";
import { DivInput } from "../styles/Input";

const Input = ({ type = "", placeholder = "", nome = "", key = "" }) => {
  return (
    <DivInput key={key}>
      <input type={type} name={nome} placeholder={placeholder} required />
    </DivInput>
  );
};

export default Input;
