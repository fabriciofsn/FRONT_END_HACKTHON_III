import React from "react";
import Input from "./Input";
import Foto from "./Photo";
import Title from "./Title";

const Dados = () => {
  return (
    <form>
      <Foto />
      <div style={{ textAlign: "center" }}>
        <Title title="adicionar colaborador" />
      </div>
      <Input type="text" placeholder="Nome" />
      <Input type="number" placeholder="CPF" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Senha" />
    </form>
  );
};

export default Dados;
