import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { DivFooter, DivButtonDesktop } from "../styles/Setor";
import "../styles/mediaQuery.css";
import "../styles/ColaboradorScreen.css";
import { Objects } from "../components/Objects";
import HeaderDesktop from "../components/HeaderDesktop";
import AdicionarSetor from "../components/AdicionarSetor";
import { TableCargos } from "../tables/TableCargos";

const Categoria = () => {
  const [modal, setModal] = useState(false);
  const divRef = useRef();

  useEffect(() => {}, [modal]);

  return (
    <div ref={divRef}>
      <div className="showMobile">
        <Header none="none" />
      </div>
      <div className="showDesktop">
        <HeaderDesktop />
      </div>
      <div className="ColaboradorObjectsBody" id="contentSetor">
        <div className="ColaboradorDivObjects">
          <Objects object={TableCargos} tipo="categoria" titulo="CARGO" />
        </div>
      </div>
      {modal && (
        <AdicionarSetor
          title="ADICIONAR CARGO"
          input={<input type="text" required placeholder="Nome" />}
          button="Cadastrar cargo"
          cancelar="Cancelar"
          handleClick={() => setModal(false)}
        />
      )}
      <DivFooter>
        <button onClick={() => setModal(true)}>
          Adicionar <p>Cargo</p>
        </button>
      </DivFooter>
    </div>
  );
};

export default Categoria;
