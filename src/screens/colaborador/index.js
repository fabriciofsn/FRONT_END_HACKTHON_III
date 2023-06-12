/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useRef, useState } from "react";
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

  const [pesquisa, setPesquisa] = useState("");

  const [filtrosLista, setFiltrosLista] = useState({
    departamento: "",
    setor: "",
    cargo: "",
  });

  const setoresDisponiveis = useMemo(() => {
    if (!filtrosLista.departamento) {
      return undefined;
    }

    // setFiltrosLista.setor(undefined)

    return tableSetores.filter(
      (setor) => setor.departamentoId === filtrosLista.departamento
    );

    
  }, [filtrosLista.departamento]);
  
  useEffect(() =>{
    setFiltrosLista({ ...filtrosLista, setor: "" })
  }, [filtrosLista.departamento])

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

      if (pesquisa && pesquisa.toLowerCase() !== colaborador.nome.toLowerCase()){
        return false;
      }

      return true;
    });
  }, [filtrosLista.cargo, filtrosLista.departamento, filtrosLista.setor, pesquisa]);

  const limpar = () => {
    setFiltrosLista({ filtrosLista, setor: ""});
    console.log({filtrosLista})
  }

  return (
    <div ref={divRef}>
      <div className="showMobile">
        <Header
          iconCargo={<RiFilter2Fill />}
          cargo="Cargo"
          iconDep={<RiFilter2Fill />}
          departamento="Departamento"
        />
      </div>
      <div className="showDesktop">
        <HeaderDesktop />
      </div>

      <div className="showMobile">
        <Filtros array={tableDepartamentos} />
        <Filtros icon={<RiFilter2Fill />} title="Setor" array={tableSetores} />
      </div>
      <div className="showDesktop">
        <DivButtonDesktop>
          <button onClick={() => setModal(true)}>
            Adicionar <p>Colaborador</p>
          </button>
        </DivButtonDesktop>
      </div>
      <div className="colaboradorObjectsBody">
        <div id="colaboradorDivFilter" className="showDesktop">
          <input onchange={(e) => setPesquisa(e.target.value)}></input>
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
          <p onclick={() => limpar()}>Limpar</p>
        </div>
        <div className="colaboradorDivObjects">
          <Objects
            object={colaboradoresDisponiveis}
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
