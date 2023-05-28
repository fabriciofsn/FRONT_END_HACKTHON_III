import React, { useRef, useEffect } from "react";
import { DivTipos } from "../styles/Setor";

const Filtros = () => {
  const divRef = useRef();

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
      <p>Todos</p>
      <p className="selected">RH</p>
      <p>Logística</p>
      <p>Contábil</p>
    </DivTipos>
  );
};

export default Filtros;
