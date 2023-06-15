import React from "react";
import { TbCategory } from "react-icons/tb";
import { FaUsers, FaUsersSlash } from "react-icons/fa";
import { TfiUser } from "react-icons/tfi";
import { DivBens } from "../styles/Home";
import "../styles/mediaQuery.css";
import { Link } from "react-router-dom";

const Pessoas = () => {
  return (
    <div>
     <DivBens id="divBens">
     <Link to="/cargos" className="categorias cargos">
          <div className="cards">
            <div
              className="icon-categoria"
              style={{ width: "100%", textAlign: "center" }}
            >
              <TbCategory size={60} color="#061226" />
            </div>
            <p>Cargos</p>
          </div>
        </Link>
        <Link to="/colaborador" className="gerir-bens colaboradores">
          <div className="cards">
            <div
              className="icon-bens"
              style={{ width: "100%", textAlign: "center" }}
            >
              <TfiUser size={50} color="#2c521c" />
            </div>
            <p style={{ fontSize: "1.4rem" }}>Colaboradores</p>
          </div>
        </Link>
        <Link to="/departamento" className="ocorrencias departamentos">
          <div className="cards">
            <div
              className="icon-ocorrencia"
              style={{ width: "100%", textAlign: "center" }}
            >
              <FaUsers size={50} color="#004964" />
            </div>
            <div className="title">
              <p style={{ fontSize: "1.3rem" }}>Departamentos</p>
            </div>
          </div>
        </Link>
        <Link to="/setor" className="ocorrencias setores">
          <div className="cards">
            <div
              className="icon-ocorrencia"
              style={{
                width: "100%",
                textAlign: "center",
                backgroundColor: "#4c75bd",
              }}
            >
              <FaUsersSlash size={50} color="#004964" />
            </div>
            <div className="title">
              <p>Setores</p>
            </div>
          </div>
        </Link>
      </DivBens>
    </div>
  );
};

export default Pessoas;
