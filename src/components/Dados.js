import React from "react";
import Foto from "./Photo";
import Title from "./Title";
import { DivInput } from "../styles/Input";

const Dados = (props) => {
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
          type="password"
          value={props.senha}
          onChange={props.getSenha}
          placeholder="Senha"
        />
      </DivInput>
    </form>
  );
};

export default Dados;
