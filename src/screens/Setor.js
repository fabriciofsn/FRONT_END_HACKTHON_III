import React, { useState } from "react";

import { GlobalDiv, DivFooter } from "../styles/Setor";
import AdicionarSetor from "../components/AdicionarSetor";
import Header from "../components/Header";
import Filtros from "../components/Filtros";
import {tableDepartamentos} from "../tables/TableDepartamentos";

const Setor = () => {
  const [modal, setModal] = useState(false);
  const setores = ["Diretoria", "Gerência", "RH", "Financeiro"];

  return (
    <GlobalDiv>
      <Header />
      <Filtros array={tableDepartamentos} />
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
