import React from "react";
import styled from "styled-components";

export const ButtonStyle = styled.button`
  background-color: #061226;
  width: 350px;
  max-width: 350px;
  height: 70px;
  border-radius: 40px;
  color: #d9d9d9;
  font-size: 1.3rem;
  opacity: 0.7;
`;

const Button = (props) => {
  return (
    <ButtonStyle ref={props.btnRef} onClick={props.handleClick}>
      {props.nome}
    </ButtonStyle>
  );
};

export default Button;
