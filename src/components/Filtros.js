import React, { useRef, useEffect } from "react";
import { DivTipos } from "../styles/Setor";

const Filtros = ({ icon = "", title = "", array = null }) => {
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
      {icon && title && (
        <span>
          {icon}
          {title}
        </span>
      )}
      {array &&
        array.map((setor, index) => {
          const selected = index == 1 ? "selected" : "";
          return (
            <p className={selected} key={setor}>
              {setor}
            </p>
          );
        })}
    </DivTipos>
  );
};

export default Filtros;
