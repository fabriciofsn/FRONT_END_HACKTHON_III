import React, { useEffect, useRef, useState } from "react";
import { DivCadastro, DivA, DivAccordion } from "../styles/Cadastro";
import Photo from "./Photo";
import Dados from "./Dados";
import Button from "../components/Button";
import Endereco from "./Endereco";

const Cadastro = (props) => {
  const divRef = useRef();
  const btnRef = useRef();
  const [verify, setVerify] = useState(false);
  const [objectEmpty, setObjectEmpty] = useState(false);
  const [uf, setUf] = useState([]);
  const [select, setSelect] = useState("");
  const [filtrarCidade, setFiltrarCidade] = useState([]);
  const [valorCidade, setValorCidade] = useState("");
  const [index, setIndex] = useState(0);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");

  useEffect(() => {
    const regexCPF = /^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/;
    const testCPF = regexCPF.test(cpf);
    const regexEmail = /^\S+@\S+\.\S+$/;
    const testEmail = regexEmail.test(email);

    if (senha.length > 0) {
      setVerify(true);
    }
    if (senha.length >= 8) {
      setVerify(false);
    }

    if (nome.length > 2 && testCPF && testEmail && senha.length >= 8) {
      btnRef.current.style.opacity = "1";
      setObjectEmpty(true);
    } else {
      btnRef.current.style.opacity = "0.7";
      setObjectEmpty(false);
    }
  }, [nome, cpf, email, senha]);

  useEffect(() => {
    const regexCep = /^\d{5}-?\d{3}/;
    if (
      regexCep &&
      bairro.length > 2 &&
      rua.length > 0 &&
      select !== "" &&
      filtrarCidade &&
      bairro !== "" &&
      rua !== ""
    ) {
      btnRef.current.style.opacity = "1";
      setObjectEmpty(true);
    } else {
      btnRef.current.style.opacity = "0.7";
      setObjectEmpty(false);
    }
  }, [cep, bairro, rua]);

  useEffect(() => {
    const buscarUF = async () => {
      const estado = await fetch(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      );
      const uf = await estado.json();
      setUf(uf);
    };
    buscarUF();
  }, []);

  useEffect(() => {
    const buscarCidade = async () => {
      const cidades = await fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${select}/distritos`
      );
      const cidade = await cidades.json();
      setFiltrarCidade(cidade);
    };
    buscarCidade();
  }, [select]);

  const handleClick = (event) => {
    event.preventDefault();
    index == dados.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  let dados = [
    <Dados
      value={nome}
      getNome={({ target }) => setNome(target.value)}
      CPF={cpf}
      getCPF={({ target }) => setCpf(target.value)}
      email={email}
      getEmail={({ target }) => setEmail(target.value)}
      senha={senha}
      getSenha={({ target }) => setSenha(target.value)}
    />,
    <Endereco
      cep={cep}
      getCep={({ target }) => setCep(target.value)}
      bairro={bairro}
      getBairro={({ target }) => setBairro(target.value)}
      rua={rua}
      getRua={({ target }) => setRua(target.value)}
      UF={uf && uf}
      value={select}
      setValor={setSelect}
      cidade={filtrarCidade && filtrarCidade}
      valorCidade={valorCidade}
      setValorCidade={setValorCidade}
    />,
  ];

  return (
    <DivCadastro>
      <form method="POST">
        <Photo />
        {dados[index]}
        <div>
          {verify && (
            <div style={{ textAlign: "left", margin: "0 28px" }}>
              <p style={{ color: "red" }}>
                A senha deve ter, no mínimo, 8 caracteres
              </p>
            </div>
          )}
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
