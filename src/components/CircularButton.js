import React from "react";
import styled from "styled-components";

const CircularBtn = styled.button`
  background-color: #061226;
  width: 100%;
  max-width: 80px;
  margin: 0 10px;
  height: 60px;
  color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  border: none;
  border-radius: 15px;
`;

const CircularButton = (props) => {
  return <CircularBtn>{props.nome}</CircularBtn>;
};

export default CircularButton;
