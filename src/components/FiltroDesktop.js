import React, { useState, useEffect, useRef } from "react";
import { tableSetores } from "../tables/TableSetores";

export function FiltroDesktop({
  icon = "",
  title = "",
  departamento = false,
  array = null,
  array2 = null,
  title2 = null,
}) {
  const filterDepartamento = useRef("");
  const filterSetor = useRef("");
  let filterCargo = useRef("");

  const [arrayFilter, setArrayFilter] = useState(tableSetores);

  const changeRadiosFilter = () => {
    setArrayFilter(
      tableSetores.filter(
        (setor) => setor.departamentoId === filterDepartamento.current
      )
    );
  };

  useEffect(() => {
    changeRadiosFilter();
  }, []);

  const backSetorEmpity = () => {
    filterSetor.current = "";
  };

  const handleInputChangeDepartamento = (event) => {
    filterDepartamento.current = event.target.value;
    backSetorEmpity();
    changeRadiosFilter();
    console.log("departamento" + filterDepartamento.current);
    console.log("setor: " + filterSetor.current);
    console.log("cargo: " + filterCargo.current);
  };

  const handleInputChangeCargo = (event) => {
    filterCargo.current = event.target.value;
    console.log("departamento" + filterDepartamento.current);
    console.log("setor: " + filterSetor.current);
    console.log("cargo: " + filterCargo.current);
  };

  const handleInputChangeSetor = (event) => {
    filterSetor.current = event.target.value;
    console.log("departamento: " + filterDepartamento.current);
    console.log("setor: " + filterSetor.current);
    console.log("cargo: " + filterCargo.current);
  };

  return (
    <div>
      {icon && title && (
        <span>
          {icon}
          {title}
        </span>
      )}
      <br />

      {array &&
        array.map((valor) => {
          return (
            <>
              <input
                type="radio"
                id={valor.id}
                name={title}
                value={valor.id}
                key={valor.id}
                onChange={handleInputChangeDepartamento}
              ></input>
              <label htmlFor={valor.id}>{valor.nome}</label>
              <br></br>
            </>
          );
        })}

      {departamento && <p>{icon}Setor</p>}
      {departamento &&
        arrayFilter.map((setor) => {
          return (
            <>
              <input
                type="radio"
                id={setor.id}
                name={"setor"}
                value={setor.id}
                key={setor.id}
                onChange={handleInputChangeSetor}
              ></input>
              <label htmlFor={setor.id}>{setor.nome}</label>
              <br></br>
            </>
          );
        })}

      {icon && title2 && (
        <span>
          {icon}
          {title2}
        </span>
      )}
      <br />
      {array2 &&
        array2.map((valor) => {
          return (
            <>
              <input
                type="radio"
                id={valor.id}
                name={title2}
                value={valor.id}
                key={valor.id}
                onChange={handleInputChangeCargo}
              ></input>
              <label htmlFor={valor.id}>{valor.nome}</label>
              <br></br>
            </>
          );
        })}
    </div>
  );
}
