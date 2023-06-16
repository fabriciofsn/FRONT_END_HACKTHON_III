import React from "react";
import Header from "../components/Header";
import { RiFilter2Fill } from "react-icons/ri";

const Ocorrencia = () => {
  return (
    <Header
      iconCargo={<RiFilter2Fill />}
      cargo="Tipos"
      iconDep={<RiFilter2Fill />}
      departamento="Departamento"
    />
  );
};

export default Ocorrencia;
