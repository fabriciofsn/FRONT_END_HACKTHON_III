import React, { useState } from "react";
import Header from "../components/Header";
import Filtros from "../components/Filtros";
import AdicionarSetor from "../components/AdicionarSetor";
import { DivFooter } from "../styles/Setor";

const Departamento = () => {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const setores = ["Todos", "RH", "Logístico", "Contábil"];

const teste = (e) =>{
  setModal2(true);
  e.preventDefault();
}

  return (
    <div>
      <Header />

      {modal && (
        <AdicionarSetor
          title="ADICIONAR DEPARTAMENTO"
          input={<input type="text" required placeholder="Nome" />}
          button="Criar Setor de Direção"
          handleClickAvancar = {teste}
          cancelar="Cancelar"
          handleClick={() => setModal(false)}
        />
      )}

{modal2 && (
        <AdicionarSetor
          title="ADICIONAR SETOR"
          input= "Direção"
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
