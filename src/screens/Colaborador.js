import React, { useState } from "react";
import Header from "../components/Header";
import { RiFilter2Fill } from "react-icons/ri";
import Filtros from "../components/Filtros";
import { DivFooter } from "../styles/Setor";
import Cadastro from "../components/Cadastro";

const Colaborador = () => {
  const setores = ["Diretoria", "Gerência", "RH", "Financeiro"];
  const departamentos = ["Todos", "Direção", "Financeiro"];
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(false);
  };

  return (
    <div>
      <Header
        iconCargo={<RiFilter2Fill />}
        cargo="Cargo"
        iconDep={<RiFilter2Fill />}
        departamento="Departamento"
      />
      <Filtros array={setores} />
      <Filtros icon={<RiFilter2Fill />} title="Setor:" array={departamentos} />
      {modal && <Cadastro handleClick={handleClick} />}
      <DivFooter>
        <button onClick={() => setModal(true)}>
          Adicionar <p>Colaborador</p>
        </button>
      </DivFooter>
    </div>
  );
};

export default Colaborador;
