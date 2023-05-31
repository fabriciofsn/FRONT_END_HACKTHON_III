import React, { useEffect, useRef } from "react";
import { DivFlex } from "../styles/Endereco";
import SelectCargo from "./SelectCargo";
import Input from "./Input";
import Photo from "./Photo";
import { DivOverFlow, DivFlexContent, DivSpan } from "../styles/Endereco";
import CircularButton from "./CircularButton";
import Textarea from "./Textarea";

const Atributos = () => {
  const cargo = ["Adm", "Supervisor", "Gerente", "Simplório funcionário"];
  const departamento = ["RH", "Financeiro", "Direção"];
  const divRef = useRef();

  useEffect(() => {
    if (divRef.current) {
      const labels = divRef.current.querySelectorAll("label");
      function alterLabel(index) {
        labels.forEach((label) => label.classList.remove("selected"));
        labels[index].classList.add("selected");
      }

      labels.forEach((label, index) => {
        label.addEventListener("click", () => {
          alterLabel(index);
        });
      });
    }
  });

  return (
    <DivOverFlow ref={divRef}>
      <Photo />
      <Input type="number" placeholder="Carga horária" />
      <Input type="number" placeholder="Salário" />
      <SelectCargo array={cargo} />
      <DivFlex>
        <span>Home office?</span>
        <label className="selected" htmlFor="homeoffice">
          <input name="homeoffice" type="radio" id="homeoffice" />
          Sim
        </label>
        <label htmlFor="home">
          <input name="homeoffice" type="radio" id="home" />
          Não
        </label>
      </DivFlex>

      <DivFlex>
        <label id="bens" htmlFor="cod">
          Bens em mãos
          <Input id="cod" type="number" placeholder="Código" />
        </label>
        <CircularButton nome="+" />
      </DivFlex>
      <SelectCargo array={departamento} />
      <SelectCargo array={cargo} />
      <Textarea />
    </DivOverFlow>
  );
};

export default Atributos;
