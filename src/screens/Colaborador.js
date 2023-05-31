import React, { useState } from "react";
import Header from "../components/Header";
import { RiFilter2Fill } from "react-icons/ri";
import Filtros from "../components/Filtros";
import { DivFooter } from "../styles/Setor";
import Cadastro from "../components/Cadastro";
import Colaboradores from "../components/Colaboradores";
import {tableSetores} from "../tables/TableSetores";
import {tableDepartamentos} from "../tables/TableDepartamentos";
import {FiltroDesktop} from "../components/FiltroDesktop";


const Colaborador = () => {
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
      <Filtros array={tableDepartamentos} />
      <Filtros icon={<RiFilter2Fill />} title="Setor" array={tableSetores} />
      <FiltroDesktop icon={<RiFilter2Fill />} title="Departamentos" array={tableDepartamentos} />
      <FiltroDesktop icon={<RiFilter2Fill />} title="Setor" array={tableSetores} setor={true}/>
      <Colaboradores />
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
