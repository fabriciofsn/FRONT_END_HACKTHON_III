import React, { useRef, useEffect } from "react";
import { DivTipos } from "../styles/Setor";

const Filtros = () => {
  const divRef = useRef();
  const setores = ["Todos", "RH", "Logístico", "Contábil"];

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

  return (
    <DivTipos ref={divRef}>
      {setores.map((setor, index) => {
        const classList = index == 1 ? "selected" : "";
        return (
          <p className={classList} key={setor}>
            {setor}
          </p>
        );
      })}
    </DivTipos>
  );
};

export default Filtros;
