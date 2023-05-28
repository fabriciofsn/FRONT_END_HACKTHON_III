import React, { useState } from "react";
import Header from "../components/Header";
import Filtros from "../components/Filtros";
import AdicionarSetor from "../components/AdicionarSetor";
import { DivFooter } from "../styles/Setor";

const Departamento = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Header />
      <Filtros />

      {modal && (
        <AdicionarSetor
          title="ADICIONAR DEPARTAMENTO"
          input={<input type="text" required placeholder="Nome" />}
          button="Criar Setor de Direção"
          cancelar="Cancelar"
          handleClick={() => setModal(false)}
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
