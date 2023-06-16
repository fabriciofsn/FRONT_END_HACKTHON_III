import React, { useMemo, useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import { RiFilter2Fill } from "react-icons/ri";
import Filtros from "../components/Filtros";
import { DivFooter, DivButtonDesktop } from "../styles/Setor";
import Cadastro from "../components/Cadastro";
import { tableSetores } from "../tables/TableSetores";
import { tableDepartamentos } from "../tables/TableDepartamentos";
import { FiltroDesktop } from "../components/FiltroDesktop";
import "../styles/mediaQuery.css";
import "../styles/ColaboradorScreen.css";
import { tableCategorias } from "../tables/TableCategorias";
import { Objects } from "../components/Objects";
import HeaderDesktop from "../components/HeaderDesktop";
import { tableBens } from "../tables/TableBens";
import { Filtro } from "../components/filtro/Filtro";
import { AdicionarBens } from "../components/AdicionarBem";

const Bens = () => {
  const [modal, setModal] = useState(false);
  const [cargo, setCargo] = useState(false);
  const divRef = useRef();
  const handleClick = () => {
    setModal(false);
  };

  const [filtrosLista, setFiltrosLista] = useState({
    departamento: "",
    setor: "",
    cargo: "",
  });

  const setoresDisponiveis = useMemo(() => {
    setFiltrosLista({ ...filtrosLista, setor: "" });

    if (!filtrosLista.departamento) {
      return undefined;
    }

    return tableSetores.filter(
      (setor) => setor.departamentoId === filtrosLista.departamento
    );
  }, [filtrosLista.departamento]);

  const colaboradoresDisponiveis = useMemo(() => {
    return tableBens.filter((colaborador) => {
      const { cargo, departamento, setor } = filtrosLista;

      if (departamento && departamento !== colaborador.departamentoId) {
        return false;
      }

      if (cargo && cargo !== colaborador.categoriaId) {
        return false;
      }

      if (setor && setor !== colaborador.setorId) {
        return false;
      }

      return true;
    });
  }, [filtrosLista.cargo, filtrosLista.departamento, filtrosLista.setor]);

  const [searchValue, setSearchValue] = useState("");
  const [pesquisaColaboradores, setPesquisaColaboradores] = useState(
    colaboradoresDisponiveis
  );

  const Search = () => {
    let results = colaboradoresDisponiveis;

    if (searchValue !== "") {
      results = colaboradoresDisponiveis.filter((colaborador) =>
        colaborador.nome.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    setPesquisaColaboradores(results);
  };

  useEffect(() => {
    Search();
  }, [searchValue, colaboradoresDisponiveis]);

  return (
    <div ref={divRef}>
      <div className="showMobile">
        <Header
          iconCargo={<RiFilter2Fill />}
          cargo="Categoria"
          setCargo={setCargo}
          iconDep={<RiFilter2Fill />}
          departamento="Departamento"
          search={searchValue}
          setSearch={setSearchValue}
        />
      </div>
      <div className="showDesktop">
        <HeaderDesktop />
      </div>

      <div className="showMobile">
        <div className="departamento">
          <Filtros
            title="departamentos"
            opcoes={tableDepartamentos}
            onChange={(opcaoId) =>
              setFiltrosLista({ ...filtrosLista, departamento: opcaoId })
            }
          />
        </div>
        <div className="setores">
          {setoresDisponiveis && (
            <Filtros
              icon={<RiFilter2Fill />}
              title="Setores"
              opcoes={setoresDisponiveis}
              onChange={(opcaoId) =>
                setFiltrosLista({ ...filtrosLista, setor: opcaoId })
              }
            />
          )}
        </div>
        {setoresDisponiveis && cargo && (
          <div className="cargo">
            <Filtros
              icon={<RiFilter2Fill />}
              title="Cargos"
              opcoes={tableCategorias}
              onChange={(opcaoId) =>
                setFiltrosLista({ ...filtrosLista, cargo: opcaoId })
              }
            />
          </div>
        )}
      </div>
      <div className="showDesktop">
        <DivButtonDesktop>
          <button onClick={() => setModal(true)}>
            Adicionar <p>Bem</p>
          </button>
        </DivButtonDesktop>
      </div>
      <div className="colaboradorObjectsBody">
        <div id="colaboradorDivFilter" className="showDesktop">
          <input
            className="divFilterPesquisa"
            placeholder="Pesquise aqui"
            onChange={(e) => setSearchValue(e.target.value)}
          ></input>
          <Filtro
            icon={<RiFilter2Fill />}
            title="Departamentos"
            opcoes={tableDepartamentos}
            onChange={(opcaoId) =>
              setFiltrosLista({ ...filtrosLista, departamento: opcaoId })
            }
          />
          {setoresDisponiveis && (
            <Filtro
              icon={<RiFilter2Fill />}
              title="Setores"
              opcoes={setoresDisponiveis}
              onChange={(opcaoId) =>
                setFiltrosLista({ ...filtrosLista, setor: opcaoId })
              }
            />
          )}
          <Filtro
            icon={<RiFilter2Fill />}
            title="Cargos"
            opcoes={tableCategorias}
            onChange={(opcaoId) =>
              setFiltrosLista({ ...filtrosLista, cargo: opcaoId })
            }
          />
        </div>
        <div className="colaboradorDivObjects">
          <Objects
            object={pesquisaColaboradores}
            colaborador={true}
            tipo="bens"
          />
        </div>
      </div>
      {/* <FiltroDesktop icon={<RiFilter2Fill />} title="Setor" array={tableSetores} setor={true}/> */}
      {/* <Colaboradores /> */}
      {modal && <AdicionarBens handleClick={handleClick}/>}
      <DivFooter className="showMobile">
        <button onClick={() => setModal(true)}>
          Adicionar <p>Bem</p>
        </button>
      </DivFooter>
    </div>
  );
};

export default Bens;
