import React, { useMemo, useRef, useState, useEffect } from "react";
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
import { Filtro } from "../components/filtro/Filtro";

const Setor = () => {
  const [modal, setModal] = useState(false);
  const setores = ["Diretoria", "Gerência", "RH", "Financeiro"];

  const [filtrosLista, setFiltrosLista] = useState({
    departamento: "",
    setor: "",
    cargo: "",
  });

  const setoresDisponiveis = useMemo(() => {

    setFiltrosLista({ ...filtrosLista, setor: "" })

    if (!filtrosLista.departamento) {
      return undefined;
    }

    return tableSetores.filter(
      (setor) => setor.departamentoId === filtrosLista.departamento
    );
  }, [filtrosLista.departamento]);

  const colaboradoresDisponiveis = useMemo(() => {
    return tableSetores.filter((colaborador) => {
      const { cargo, departamento, setor } = filtrosLista;

      if (departamento && departamento !== colaborador.departamentoId) {
        return false;
      }

      if (cargo && cargo !== colaborador.cargoId) {
        return false;
      }

      if (setor && setor !== colaborador.setorId) {
        return false;
      }

      return true;
    });
  }, [filtrosLista.cargo, filtrosLista.departamento, filtrosLista.setor]);

  const [searchValue, setSearchValue] = useState("");
  const [pesquisaColaboradores, setPesquisaColaboradores] = useState(colaboradoresDisponiveis);

  const Search = () => {

    let results = colaboradoresDisponiveis;

    if(searchValue !== ""){
      results = colaboradoresDisponiveis.filter((colaborador) =>
        colaborador.nome.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    
    setPesquisaColaboradores(results)

  }

  useEffect(() => {
    Search();
  }, [searchValue, colaboradoresDisponiveis]);

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
        <input className="divFilterPesquisa" placeholder="Pesquise aqui" onChange={(e) => setSearchValue(e.target.value)}></input>
          <Filtro
            icon={<RiFilter2Fill />}
            title="Departamentos"
            opcoes={tableDepartamentos}
            onChange={(opcaoId) =>
              setFiltrosLista({ ...filtrosLista, departamento: opcaoId })
            }
          />
        </div>
        <div className="colaboradorDivObjects">
          <Objects object={pesquisaColaboradores} tipo="setor" titulo="SETOR"/>
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
