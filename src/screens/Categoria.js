import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { DivFooter, DivButtonDesktop } from "../styles/Setor";
import "../styles/mediaQuery.css";
import "../styles/ColaboradorScreen.css";
import { Objects } from "../components/Objects";
import HeaderDesktop from "../components/HeaderDesktop";
import { tableCategorias } from "../tables/TableCategorias";
import AdicionarSetor from "../components/AdicionarSetor";

const Categoria = () => {
  const [modal, setModal] = useState(false);
  const divRef = useRef();

  useEffect(() => {}, [modal]);

  return (
    <div ref={divRef}>
      <div className="showMobile">
        <Header />
      </div>
      <div className="showDesktop">
        <HeaderDesktop />
      </div>
      <div className="showDesktop">
        <DivButtonDesktop>
          <button onClick={() => setModal(true)}>
            Adicionar <p>Categoria</p>
          </button>
        </DivButtonDesktop>
      </div>
      <div className="ColaboradorObjectsBody">
        <div className="ColaboradorDivObjects">
          <Objects object={tableCategorias} tipo="categoria" titulo="CATEGORIA"/>
        </div>
      </div>
      {modal && (
        <AdicionarSetor
          title="ADICIONAR CATEGORIA"
          input={<input type="text" required placeholder="Nome" />}
          button="Cadastrar categoria"
          cancelar="Cancelar"
          handleClick={() => setModal(false)}
        />
      )}
      <DivFooter className="showMobile">
        <button onClick={() => setModal(true)}>
          Adicionar <p>Categoria</p>
        </button>
      </DivFooter>
    </div>
  );
};

export default Categoria;
