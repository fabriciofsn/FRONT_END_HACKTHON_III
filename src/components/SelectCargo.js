import React from "react";
import { DivInput } from "../styles/Input";
import styled from "styled-components";

const Select = styled.select`
  background-color: transparent;
  font-size: 1.3rem;
  border: none;
  width: 100%;
  max-width: 320px;
  margin: auto;
  outline: none;
  option {
    font-size: 1rem;
  }
`;

const SelectCargo = (props) => {
  return (
    <DivInput>
      <Select>
        {props.array.map((arr) => {
          return (
            <option key={arr} value="arr">
              {arr}
            </option>
          );
        })}
      </Select>
    </DivInput>
  );
};

export default SelectCargo;
