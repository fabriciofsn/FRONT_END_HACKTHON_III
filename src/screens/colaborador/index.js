/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useRef, useState, useEffect } from "react";
import Header from "../../components/Header";
import { RiFilter2Fill } from "react-icons/ri";
import Filtros from "../../components/Filtros";
import { DivFooter, DivButtonDesktop } from "../../styles/Setor";
import Cadastro from "../../components/Cadastro";
import { tableSetores } from "../../tables/TableSetores";
import { tableDepartamentos } from "../../tables/TableDepartamentos";
import "../../styles/mediaQuery.css";
import "../../styles/ColaboradorScreen.css";
import tableColaboradores from "../../tables/TableColaboradores";
import { TableCargos } from "../../tables/TableCargos";
import { Objects } from "../../components/Objects";
import HeaderDesktop from "../../components/HeaderDesktop";
import { Filtro } from "../../components/filtro/Filtro";

const Colaborador = () => {
  const [modal, setModal] = useState(false);
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
    return tableColaboradores.filter((colaborador) => {
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
    //HEADER MOBILE
    <div ref={divRef}>
      <div className="showMobile">
        <Header
          iconCargo={<RiFilter2Fill />}
          cargo="Cargo"
          iconDep={<RiFilter2Fill />}
          departamento="Departamento"
          search={searchValue}
          setSearch={setSearchValue}
        />
      </div>
      {/* HEADER DESKTOP */}
      <div className="showDesktop">
        <HeaderDesktop />
      </div>
      {/* FILTROS MOBILE */}
      <div className="showMobile">
        <Filtros setores={tableDepartamentos} />
        <Filtros
          icon={<RiFilter2Fill />}
          title="Setor"
          array={tableDepartamentos}
          setores={tableSetores}
        />
      </div>
      {/* EXIBIR PARA DESKTOP */}
      <div className="showDesktop">
        <DivButtonDesktop>
          <button onClick={() => setModal(true)}>
            Adicionar <p>Colaborador</p>
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
            opcoes={TableCargos}
            onChange={(opcaoId) =>
              setFiltrosLista({ ...filtrosLista, cargo: opcaoId })
            }
          />
        </div>
        <div className="colaboradorDivObjects">
          <Objects
            object={pesquisaColaboradores}
            colaborador={true}
            tipo="colaborador"
          />
        </div>
      </div>
      {/* <FiltroDesktop icon={<RiFilter2Fill />} title="Setor" array={tableSetores} setor={true}/> */}
      {/* <Colaboradores /> */}
      {modal && <Cadastro handleClick={handleClick} />}
      <DivFooter className="showMobile">
        <button onClick={() => setModal(true)}>
          Adicionar <p>Colaborador</p>
        </button>
      </DivFooter>
    </div>
  );
};

export default Colaborador;
