import React, { useEffect, useRef, useState } from "react";
import { DivCadastro, DivA, DivAccordion } from "../styles/Cadastro";
import Photo from "./Photo";
import Dados from "./Dados";
import Button from "../components/Button";

const Cadastro = (props) => {
  const divRef = useRef();
  const btnRef = useRef();
  const [objectEmpty, setObjectEmpty] = useState(false);

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    if (nome !== "" && cpf !== "" && email !== "" && senha !== "") {
      btnRef.current.style.opacity = "1";
      setObjectEmpty(true);
    } else {
      btnRef.current.style.opacity = "0.7";
      setObjectEmpty(false);
    }
  }, [nome, cpf, email, senha]);

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <DivCadastro>
      <form method="POST">
        <Photo />
        <div>
          <Dados
            value={nome}
            getNome={({ target }) => setNome(target.value)}
            CPF={cpf}
            getCPF={({ target }) => setCpf(target.value)}
            email={email}
            getEmail={({ target }) => setEmail(target.value)}
            senha={senha}
            getSenha={({ target }) => setSenha(target.value)}
          />
        </div>

        <DivA>
          <Button handleClick={handleClick} btnRef={btnRef} nome="Avançar" />
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
