import React from "react";
import { TbCategory } from "react-icons/tb";
import { FaUsers, FaUsersSlash } from "react-icons/fa";
import { TfiUser } from "react-icons/tfi";
import { DivBens } from "../styles/Home";

const Pessoas = () => {
  return (
    <div>
      <DivBens>
        <div className="categorias">
          <div>
            <div
              className="icon-categoria"
              style={{ width: "100%", textAlign: "center" }}
            >
              <TbCategory size={60} color="#061226" />
            </div>
            <p>Cargos</p>
          </div>
        </div>
        <div className="gerir-bens">
          <div>
            <div
              className="icon-bens"
              style={{ width: "100%", textAlign: "center" }}
            >
              <TfiUser size={50} color="#2c521c" />
            </div>
            <p style={{ fontSize: "1.4rem" }}>Colaboradores</p>
          </div>
        </div>
        <div className="ocorrencias">
          <div>
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
        </div>
        <div className="ocorrencias">
          <div>
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
        </div>
      </DivBens>
    </div>
  );
};

export default Pessoas;
