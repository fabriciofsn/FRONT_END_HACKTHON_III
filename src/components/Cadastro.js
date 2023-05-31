import React, { useEffect, useRef, useState } from "react";
import { DivCadastro, DivA, DivAccordion } from "../styles/Cadastro";
import Button from "./Button";
import Dados from "./Dados";
import Endereco from "./Endereco";
import Atributos from "./Atributos";

const Cadastro = (props) => {
  const divRef = useRef();
  let [nomeButton, setNomeButton] = useState("Avançar");

  const [index, setIndex] = useState(0);
  const form = [<Dados />, <Endereco />, <Atributos />];

  const handleClick = (event) => {
    event.preventDefault();
    index == form.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  useEffect(() => {
    if (index == form.length - 1) {
      setNomeButton("Criar");
    } else {
      setNomeButton("Avançar");
    }
  });

  useEffect(() => {
    if (divRef.current) {
      const filtros = divRef.current.querySelectorAll("p");
      filtros.forEach((filtro) => {
        filtro.classList.remove("selected");
      });
      filtros[index].classList.add("selected");
      filtros[index].style.fontWeight = "bold";
      filtros[index].style.opacity = "1";
      filtros[index].addEventListener("click", () => {
        setIndex(index);
      });
    }
  });

  return (
    <DivCadastro>
      <form method="POST">
        {form[index]}
        <DivA>
          <Button nome={nomeButton} handleClick={handleClick} />
          <a href="#" onClick={props.handleClick}>
            Cancelar
          </a>
        </DivA>
        <DivAccordion ref={divRef}>
          <p className="selected">Dados</p>
          <p>Endereço</p>
          <p>Atributos</p>
        </DivAccordion>
      </form>
    </DivCadastro>
  );
};

export default Cadastro;
