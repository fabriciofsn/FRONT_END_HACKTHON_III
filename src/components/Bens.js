import React from "react";
import { Link } from "react-router-dom";
import { DivBens } from "../styles/Home";
import { TbCategory } from "react-icons/tb";
import { FaDesktop } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";
import "../styles/mediaQuery.css";


const Bens = () => {
  return (
    <div>
      <DivBens id="divBens">
        <Link to="/categoria" className="categorias">
          <div className="cards">
            <div
              className="icon-categoria"
              style={{ width: "100%", textAlign: "center" }}
            >
              <TbCategory size={60} color="#061226" />
            </div>
            <p>Categorias</p>
          </div>
        </Link>
        <Link to="/bens" className="gerir-bens">
          <div className="cards">
            <div
              className="icon-bens"
              style={{ width: "100%", textAlign: "center" }}
            >
              <FaDesktop size={50} color="#2c521c" />
            </div>
            <p>Gerir Bens</p>
          </div>
        </Link>
        <Link to="/ocorrencia" className="ocorrencias">
          <div className="cards">
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
        </Link>
      </DivBens>
    </div>
  );
};

export default Bens;
