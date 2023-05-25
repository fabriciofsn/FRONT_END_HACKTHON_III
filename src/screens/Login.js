import React from "react";
import hackathon_logo from "../assets/hackathon_logo.png";
import {
  DivElement,
  DivWrapper,
  DivAlignCenter,
  DivStyleInput,
  ButtonStyled,
  DivAlignButton,
  DivLinkHref,
} from "../styles/Login";

const userFields = [
  {
    id: "email",
    label: "Usuário",
    type: "email",
  },
  {
    id: "password",
    label: "Senha",
    type: "password",
  },
];

const Login = () => {
  const handleClick = () => {
    alert("Problema seu, se vire aí!");
  };

  return (
    <div style={{ height: "100%" }}>
      <DivElement>
        <img src={hackathon_logo} alt="logo" />
      </DivElement>
      <DivAlignCenter>
        <form>
          {userFields.map(({ id, label, type }) => {
            return (
              <DivWrapper key={id}>
                <label htmlFor={id}>
                  <i>{label}</i>
                </label>
                <DivStyleInput>
                  <input type={type} id={id} name={id} />
                </DivStyleInput>
              </DivWrapper>
            );
          })}
          <DivLinkHref>
            <a onClick={handleClick} href="#">
              <i> Esqueci minha senha</i>
            </a>
          </DivLinkHref>
          <DivAlignButton>
            <ButtonStyled>Entrar</ButtonStyled>
          </DivAlignButton>
        </form>
      </DivAlignCenter>
    </div>
  );
};

export default Login;
