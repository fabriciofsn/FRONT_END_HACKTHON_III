import React, { useRef, useEffect } from "react";
import { DivTipos } from "../styles/Setor";
import { useState } from "react";

const Filtros = ({
  icon = "",
  title = "",
  array,
  setores,
  onChange,
  opcoes = [],
}) => {
  const divRef = useRef();
  const setorRef = useRef();

  useEffect(() => {
    if (divRef.current) {
      const acc = divRef.current.querySelectorAll("label");
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
      const setores = setorRef.current.querySelectorAll("label");
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon && title && (
            <span>
              {icon}
              {title}
            </span>
          )}
        </div>
        {opcoes && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              type="radio"
              id={title}
              name={title}
              value="Todos"
              key="todos"
              onChange={() => onChange("")}
            ></input>
            <label htmlFor={title}>Todos</label>
          </div>
        )}
        {opcoes &&
          opcoes.map((opcao, index) => {
            return (
              <div key={opcao.id} className="wrapper">
                <div className="filtros" key={index}>
                  <input
                    type="radio"
                    id={opcao.id}
                    name={title}
                    value={opcao.id}
                    key={opcao.id}
                    onChange={() => onChange(opcao.id)}
                  ></input>
                  <label htmlFor={opcao.id}>{opcao.nome}</label>
                </div>
              </div>
            );
          })}
      </div>
    </DivTipos>
  );
};

export default Filtros;
