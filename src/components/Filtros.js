import React, { useRef, useEffect } from "react";
import { DivTipos } from "../styles/Setor";
import { useState } from "react";
import { Objects } from "./Objects";

const Filtros = ({ icon = "", title = "", array, setores }) => {
  const divRef = useRef();
  const setorRef = useRef();
  const [id, setID] = useState("todos");

  useEffect(() => {
    if (divRef.current) {
      const acc = divRef.current.querySelectorAll("p");
      function accordion(index) {
        acc.forEach((p) => p.classList.remove("selected"));
        acc[index].classList.add("selected");
      }
      acc.forEach((p, index) => {
        p.addEventListener("click", () => {
          accordion(index);
        });
      });
    }
  });

  useEffect(() => {
    if (setorRef.current) {
      const setores = setorRef.current.querySelectorAll("span");
      setores.forEach((setor) => setor.classList.remove("selected"));
      function accordion(index) {
        setores.forEach((setor) => setor.classList.remove("selected"));
        setores[index].classList.add("selected");
      }
      setores.forEach((setor, index) => {
        setor.addEventListener("click", () => {
          accordion(index);
        });
      });
    }
  });

  return (
    <DivTipos ref={divRef}>
      <div className="filters">
        {array &&
          icon &&
          title &&
          setores &&
          array.map((valor, index) => {
            const selected = index == 0 ? "selected" : "";
            return (
              <DivTipos key={index}>
                <div className="wrapper">
                  <div className="filtros">
                    <p
                      onClick={() => setID(valor.id)}
                      className={selected}
                      key={index}
                    >
                      {valor.nome}
                    </p>
                  </div>
                </div>
              </DivTipos>
            );
          })}
      </div>

      <div ref={setorRef} className="setor">
        <span>
          {icon}
          {title}
        </span>
        {setores &&
          setores.map((setor) => {
            if (setor.departamentoId == id) {
              return (
                <span className="setor" key={setor.nome}>
                  {setor.nome}
                </span>
              );
            }
          })}
      </div>
    </DivTipos>
  );
};

export default Filtros;
