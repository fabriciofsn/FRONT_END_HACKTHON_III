import React, { useEffect, useRef } from "react";
import { DivFlex } from "../styles/Endereco";
import SelectCargo from "./SelectCargo";
import Input from "./Input";
import Photo from "./Photo";
import { DivOverFlow, DivFlexContent, DivSpan } from "../styles/Endereco";
import CircularButton from "./CircularButton";
import Textarea from "./Textarea";
import Title from "./Title";
import { DivInput } from "../styles/Input";

const Atributos = (props) => {
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
      <Title title="adicionar colaborador" />
      <DivInput>
        <input
          value={props.carga_horaria}
          onChange={({ target }) => props.getCargaHoraria(target.value)}
          type="number"
          placeholder="Carga horária"
        />
      </DivInput>
      <DivInput>
        <input
          value={props.salario}
          onChange={({ target }) => props.getSalario(target.value)}
          type="number"
          placeholder="Salário"
        />
      </DivInput>
      <SelectCargo array={cargo} />
      <DivFlex>
        <span>Home office?</span>
        <label id="sim" className="selected" htmlFor="office">
          <input
            onChange={({ target }) => props.getHomeOffice(target.value)}
            name="homeoffice"
            type="radio"
            id="office"
            value="Sim"
          />
          Sim
        </label>
        <label htmlFor="home">
          <input
            value="Não"
            onChange={({ target }) => props.getHomeOffice(target.value)}
            name="homeoffice"
            type="radio"
            id="home"
          />
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
