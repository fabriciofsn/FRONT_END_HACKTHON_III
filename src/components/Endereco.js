import React from "react";
import Photo from "./Photo";
import Input from "./Input";
import Select from "./Select";

import { DivOverFlow } from "../styles/Endereco";

const Endereco = () => {
  return (
    <DivOverFlow>
      <Photo />
      <Input type="number" placeholder="CEP" />
      <Select />
      <Input type="text" placeholder="Bairro" />
      <Input type="text" placeholder="Rua" />
    </DivOverFlow>
  );
};

export default Endereco;
