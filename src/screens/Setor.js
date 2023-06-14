import React, { useState } from "react";
import { FiltroDesktop } from "../components/FiltroDesktop";
import { GlobalDiv, DivFooter } from "../styles/Setor";
import AdicionarSetor from "../components/AdicionarSetor";
import Header from "../components/Header";
import Filtros from "../components/Filtros";
import { tableDepartamentos } from "../tables/TableDepartamentos";
import "../styles/mediaQuery.css";
import "../styles/ColaboradorScreen.css";
import HeaderDesktop from "../components/HeaderDesktop";
import { tableSetores } from "../tables/TableSetores";
import { RiFilter2Fill } from "react-icons/ri";
import {Objects} from "../components/Objects";

const Setor = () => {
  const [modal, setModal] = useState(false);
  const setores = ["Diretoria", "Gerência", "RH", "Financeiro"];

  return (
    <GlobalDiv>
      <div className="showMobile">
        <Header />
      </div>
      <div className="showDesktop">
        <HeaderDesktop />
      </div>
      <div className="showMobile">
        <Filtros  array={tableDepartamentos} setores={tableSetores}/>
      </div>
      <div className="colaboradorObjectsBody" id="contentSetor">
        <div id="colaboradorDivFilter" className="showDesktop">
          <FiltroDesktop
            icon={<RiFilter2Fill />}
            title="Departamentos"
            array={tableDepartamentos}
          />
        </div>
        <div className="colaboradorDivObjects">
          <Objects object={tableSetores} tipo="setor" titulo="SETOR"/>
        </div>
      </div>
      {modal && (
        <AdicionarSetor
          title="ADICIONAR SETOR"
          input={<input type="text" required placeholder="Nome" />}
          array={setores}
          chefe="Cadastrar chefe"
          button="Cadastrar Setor"
          cancelar="Cancelar"
          handleClick={() => setModal(false)}
        />
      )}
      <DivFooter>
        <button onClick={() => setModal(true)}>
          Adicionar <p>Setor</p>
        </button>
      </DivFooter>
    </GlobalDiv>
  );
};

export default Setor;
