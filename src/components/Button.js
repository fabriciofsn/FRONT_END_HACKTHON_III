import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  background-color: #061226;
  width: 100%;
  max-width: 350px;
  height: 70px;
  border-radius: 40px;
  color: #d9d9d9;
  font-size: 1.3rem;
`;

const Button = (props) => {
  return <ButtonStyle>{props.nome}</ButtonStyle>;
};

export default Button;
