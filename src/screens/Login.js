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
import { useState } from "react";
import EsqueceuSenha from "../components/EsqueceuSenha";

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
  const [esqueceuSenha, setEsqueceuSenha] = useState(false);

  const handleClick = () => {
    setEsqueceuSenha(true);
  };

const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = "/home";
  };

  return (
    <div style={{ height: "100%" }}>
      <DivElement>
        <img src={hackathon_logo} alt="logo" />
      </DivElement>
      <DivAlignCenter>
        <form onSubmit={handleSubmit}>
          {userFields.map(({ id, label, type }) => {
            return (
              <DivWrapper key={id}>
                <label htmlFor={id}>
                  <i>{label}</i>
                </label>
                <DivStyleInput>
                  <input type={type} id={id} name={id} required />
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
        {esqueceuSenha && (
          <EsqueceuSenha setFalse={setEsqueceuSenha} close={setEsqueceuSenha} />
        )}
      </DivAlignCenter>
    </div>
  );
};

export default Login;
