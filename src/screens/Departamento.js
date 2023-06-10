import React, { useState } from "react";
import Header from "../components/Header";
import AdicionarSetor from "../components/AdicionarSetor";
import { DivFooter } from "../styles/Setor";
import HeaderDesktop from "../components/HeaderDesktop";
import "../styles/mediaQuery.css";
import { tableDepartamentos } from "../tables/TableDepartamentos";
import {Objects} from "../components/Objects";

const Departamento = () => {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const setores = ["Todos", "RH", "Logístico", "Contábil"];

  const teste = (e) => {
    setModal2(true);
    e.preventDefault();
  }

  return (
    <div>
      <div className="showMobile">
        <Header />
      </div>
      <div className="showDesktop">
        <HeaderDesktop />
      </div>
      <div className="ColaboradorObjectsBody" id="contentSetor">
        <div className="ColaboradorDivObjects">
          <Objects object={tableDepartamentos} tipo="categoria" titulo="DEPARTAMENTO" />
        </div>
      </div>


      {modal && (
        <AdicionarSetor
          title="ADICIONAR DEPARTAMENTO"
          input={<input type="text" required placeholder="Nome" />}
          button="Criar Setor de Direção"
          handleClickAvancar={teste}
          cancelar="Cancelar"
          handleClick={() => setModal(false)}
        />
      )}

      {modal2 && (
        <AdicionarSetor
          title="ADICIONAR SETOR"
          input="Direção"
          array={setores}
          chefe="Cadastrar chefe"
          button="Finalizar"
          cancelar="Cancelar"
          direcao={true}
          handleClick={() => setModal2(false)}
        />
      )}


      <DivFooter>
        <button onClick={() => setModal(true)}>
          Adicionar <p>Departamento</p>
        </button>
      </DivFooter>
    </div>
  );
};

export default Departamento;
