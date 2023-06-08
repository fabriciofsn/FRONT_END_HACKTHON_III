import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { RiFilter2Fill } from "react-icons/ri";
import Filtros from "../components/Filtros";
import { DivFooter, DivButtonDesktop } from "../styles/Setor";
import Cadastro from "../components/Cadastro";
import { tableSetores } from "../tables/TableSetores";
import { tableDepartamentos } from "../tables/TableDepartamentos";
import { FiltroDesktop } from "../components/FiltroDesktop";
import "../styles/mediaQuery.css";
import "../styles/ColaboradorScreen.css";
import tableColaboradores from "../tables/TableColaboradores";
import { TableCargos } from "../tables/TableCargos";
import { Objects } from "../components/Objects";
import HeaderDesktop from "../components/HeaderDesktop";

const Colaborador = () => {
  const [modal, setModal] = useState(false);
  const divRef = useRef();
  const handleClick = () => {
    setModal(false);
  };

  useEffect(() => {}, [modal]);

  return (
    <div ref={divRef}>
      <div className="showMobile">
        <Header
          iconCargo={<RiFilter2Fill />}
          cargo="Cargo"
          iconDep={<RiFilter2Fill />}
          departamento="Departamento"
        />
      </div>
      <div className="showDesktop">
        <HeaderDesktop />
      </div>

      <div className="showMobile">
        <Filtros array={tableDepartamentos} />
        <Filtros icon={<RiFilter2Fill />} title="Setor" array={tableSetores} />
      </div>
      <div className="showDesktop">
        <DivButtonDesktop>
          <button onClick={() => setModal(true)}>
            Adicionar <p>Colaborador</p>
          </button>
        </DivButtonDesktop>
      </div>
      <div className="colaboradorObjectsBody">
        <div id="colaboradorDivFilter" className="showDesktop">
          <FiltroDesktop
            icon={<RiFilter2Fill />}
            title="Departamentos"
            array={tableDepartamentos}
            departamento={true}
          />
          <FiltroDesktop
            icon={<RiFilter2Fill />}
            title="Cargos"
            array={TableCargos}
            departamento={false}
          />
        </div>
        <div className="colaboradorDivObjects">
          <Objects object={tableColaboradores} colaborador={true}/>
        </div>
      </div>
      {/* <FiltroDesktop icon={<RiFilter2Fill />} title="Setor" array={tableSetores} setor={true}/> */}
      {/* <Colaboradores /> */}
      {modal && <Cadastro handleClick={handleClick} />}
      <DivFooter className="showMobile">
        <button onClick={() => setModal(true)}>
          Adicionar <p>Colaborador</p>
        </button>
      </DivFooter>
    </div>
  );
};

export default Colaborador;
