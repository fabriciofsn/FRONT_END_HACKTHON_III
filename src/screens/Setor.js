import React, { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import {
  DivAlignCenter,
  DivInputSearch,
  HeaderContent,
  GlobalDiv,
  DivTipos,
  DivFooter,
} from "../styles/Setor";
import AdicionarSetor from "../components/AdicionarSetor";

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
      <HeaderContent>
        <DivAlignCenter>
          <RxHamburgerMenu color="#d9d9d9" size={45} fontWeight="bold" />
          <DivInputSearch>
            <input type="search" placeholder="Pesquise aqui" />
            <AiOutlineSearch size={25} color="#d9d9d9" />
          </DivInputSearch>
        </DivAlignCenter>
      </HeaderContent>
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
