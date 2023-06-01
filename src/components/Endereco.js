import React from "react";
import Photo from "./Photo";
import Input from "./Input";
import Select from "./Select";

import { DivOverFlow } from "../styles/Endereco";
import Title from "./Title";

const Endereco = () => {
  return (
    <DivOverFlow>
      <Photo />
      <Title title="adicionar colaborador" />
      <Input type="number" placeholder="CEP" nome="cep" />
      <Select />
      <Input type="text" placeholder="Bairro" nome="bairro" />
      <Input type="text" placeholder="Rua" nome="rua" />
    </DivOverFlow>
  );
};

export default Endereco;
