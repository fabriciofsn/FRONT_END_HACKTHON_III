import React, { useEffect, useRef, useState } from "react";

import { GlobalDiv, DivTipos, DivFooter } from "../styles/Setor";
import AdicionarSetor from "../components/AdicionarSetor";
import Modal from "../components/Modal";
import Header from "../components/Header";

const Setor = () => {
  const divRef = useRef();
  const [modal, setModal] = useState(false);
  const setores = ["Diretoria", "Gerência", "RH", "Financeiro"];

  useEffect(() => {
    if (divRef.current) {
      const acc = divRef.current.querySelectorAll("p");
      function accordion(index) {
        acc.forEach((p) => p.classList.remove("selected"));
        acc[index].classList.add("selected");
      }
      acc.forEach((p, index) => {
        p.addEventListener("click", () => {
          accordion(index);
        });
      });
    }
  });
  return (
    <GlobalDiv>
      <Header />
      <DivTipos ref={divRef}>
        <p>Todos</p>
        <p className="selected">RH</p>
        <p>Logística</p>
        <p>Contábil</p>
      </DivTipos>

      {modal && (
        <AdicionarSetor
          title="ADICIONAR SETOR"
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
