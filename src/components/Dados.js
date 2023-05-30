import React from "react";
import Input from "./Input";
import Foto from "./Photo";

const Dados = () => {
  return (
    <div>
      <Foto />
      <Input type="text" placeholder="Nome" />
      <Input type="number" placeholder="CPF" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Senha" />
    </div>
  );
};

export default Dados;
