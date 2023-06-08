import React, { useRef } from "react";
import Foto from "./Photo";
import Title from "./Title";
import { DivInput } from "../styles/Input";
import { FaEye } from "react-icons/fa";

const Dados = (props) => {
  const passRef = useRef();

  const showPassword = () => {
    if (passRef.current) {
      passRef.current.setAttribute("type", "text");
      setTimeout(() => {
        passRef.current.setAttribute("type", "password");
      }, 1500);
    }
  };

  return (
    <form>
      <Foto />
      <div style={{ textAlign: "center" }}>
        <Title title="adicionar colaborador" />
      </div>
      <DivInput>
        <input
          value={props.nome}
          onChange={props.getNome}
          type="text"
          placeholder="Nome"
          required
        />
      </DivInput>
      <DivInput>
        <input
          type="text"
          value={props.CPF}
          onChange={props.getCPF}
          placeholder="CPF"
        />
      </DivInput>
      <DivInput>
        <input
          type="email"
          value={props.email}
          onChange={props.getEmail}
          placeholder="Email"
        />
      </DivInput>
      <DivInput>
        <input
          ref={passRef}
          type="password"
          value={props.senha}
          onChange={props.getSenha}
          placeholder="Senha"
        />
        <div style={{ width: "100%", textAlign: "right", margin: "0 15px" }}>
          <FaEye size={20} color="#061226" onClick={showPassword} />
        </div>
      </DivInput>
    </form>
  );
};

export default Dados;
