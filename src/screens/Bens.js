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
import { tableCategorias } from "../tables/TableCategorias";
import { Objects } from "../components/Objects";
import HeaderDesktop from "../components/HeaderDesktop";
import { tableBens } from "../tables/TableBens";

const Bens = () => {
  const [modal, setModal] = useState(false);
  const divRef = useRef();
  const handleClick = () => {
    setModal(false);
  };

  return (
    <div ref={divRef}>
      <div className="showMobile">
        <Header
          iconCargo={<RiFilter2Fill />}
          cargo="Categoria"
          iconDep={<RiFilter2Fill />}
          departamento="Departamento"
        />
      </div>
      <div className="showDesktop">
        <HeaderDesktop />
      </div>

      <div className="showMobile">
        <Filtros
          array={tableDepartamentos}
          icon={<RiFilter2Fill />}
          title="Setor"
          setores={tableSetores}
        />
      </div>
      <div className="showDesktop">
        <DivButtonDesktop>
          <button onClick={() => setModal(true)}>
            Adicionar <p>Bem</p>
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
            title2="Categorias"
            array2={tableCategorias}
          />
        </div>
        <div className="colaboradorDivObjects">
<<<<<<< HEAD:src/screens/Colaborador.js
          <Objects
            object={tableColaboradores}
            colaborador={true}
            tipo="colaborador"
          />
=======
          <Objects object={tableBens} colaborador={true} tipo="bens" />
>>>>>>> db41e4e2b3b85a743be1aef5e658bfc2958c02a9:src/screens/Bens.js
        </div>
      </div>
      {/* <FiltroDesktop icon={<RiFilter2Fill />} title="Setor" array={tableSetores} setor={true}/> */}
      {/* <Colaboradores /> */}
      {modal && <Cadastro handleClick={handleClick} />}
      <DivFooter className="showMobile">
        <button onClick={() => setModal(true)}>
          Adicionar <p>Bem</p>
        </button>
      </DivFooter>
    </div>
  );
};

export default Bens;
