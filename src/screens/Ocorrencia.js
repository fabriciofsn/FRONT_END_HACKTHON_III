import React, { useState } from "react";
import Header from "../components/Header";
import { RiFilter2Fill } from "react-icons/ri";

const Ocorrencia = () => {
  const [cargo, setCargo] = useState(false);
  return (
    <>
      <Header
        iconCargo={<RiFilter2Fill />}
        setCargo={setCargo}
        cargo="Tipos"
        iconDep={<RiFilter2Fill />}
        departamento="Departamento"
      />
    </>
  );
};

export default Ocorrencia;
