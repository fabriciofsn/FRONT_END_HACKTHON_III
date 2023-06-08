import React from "react";

import { DivBens } from "../styles/Home";
import { TbCategory } from "react-icons/tb";
import { FaDesktop } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";

const Bens = () => {
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
            <p>Categorias</p>
          </div>
        </div>
        <div className="gerir-bens">
          <div>
            <div
              className="icon-bens"
              style={{ width: "100%", textAlign: "center" }}
            >
              <FaDesktop size={50} color="#2c521c" />
            </div>
            <p>Gerir Bens</p>
          </div>
        </div>
        <div className="ocorrencias">
          <div>
            <div
              className="icon-ocorrencia"
              style={{ width: "100%", textAlign: "center" }}
            >
              <FiAlertTriangle size={50} color="#004964" />
            </div>
            <div className="title">
              <p>
                Gerir <br /> Ocorrências
              </p>
            </div>
          </div>
        </div>
      </DivBens>
    </div>
  );
};

export default Bens;
