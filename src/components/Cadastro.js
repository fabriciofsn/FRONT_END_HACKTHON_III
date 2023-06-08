import React, { useEffect, useRef, useState } from "react";
import { DivCadastro, DivA, DivAccordion } from "../styles/Cadastro";
import Photo from "./Photo";
import Dados from "./Dados";
import Button from "../components/Button";
import Endereco from "./Endereco";
import Atributos from "./Atributos";

const Cadastro = (props) => {
  const divRef = useRef();
  const btnRef = useRef();
  const [buttonName, setButtonName] = useState("Avançar");
  const [verify, setVerify] = useState(false);
  const [prosseguir, setProsseguir] = useState(false);
  const [uf, setUf] = useState([]);
  const [select, setSelect] = useState(null);
  const [filtrarCidade, setFiltrarCidade] = useState([]);
  const [valorCidade, setValorCidade] = useState("");
  const [indexPosition, setIndex] = useState(0);

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState(null);
  const [rua, setRua] = useState(null);

  const [cargaHoraria, setCargaHoraria] = useState("");
  const [salario, setSalario] = useState("");
  const [homeOffice, setHomeOffice] = useState("sim");

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
      setProsseguir(true);
    } else {
      btnRef.current.style.opacity = "0.7";
      setProsseguir(false);
    }
  }, [nome, cpf, email, senha]);

  useEffect(() => {
    const regexCep = /^\d{5}-?\d{3}/;
    if (
      regexCep &&
      bairro &&
      rua &&
      select &&
      filtrarCidade &&
      bairro.length > 2 &&
      rua
    ) {
      btnRef.current.style.opacity = "1";
      setProsseguir(true);
    } else {
      btnRef.current.style.opacity = "0.7";
      setProsseguir(false);
    }
  }, [cep, bairro, filtrarCidade, select, rua]);

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
    if (prosseguir) {
      btnRef.current.style.opacity = "0.7";
      setProsseguir(false);
      indexPosition == dados.length - 1
        ? setIndex(0)
        : setIndex(indexPosition + 1);
    }
  };

  useEffect(() => {
    if (indexPosition == dados.length - 1) {
      setButtonName("Criar");
    } else {
      setButtonName("Avançar");
    }
  }, [indexPosition]);

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
    <Atributos
      getCargaHoraria={setCargaHoraria}
      carga_horaria={cargaHoraria}
      salario={salario}
      getSalario={setSalario}
      getHomeOffice={setHomeOffice}
    />,
  ];
  console.log(homeOffice);
  useEffect(() => {
    if (divRef.current) {
      const filtros = divRef.current.querySelectorAll("p");
      filtros.forEach((filtro) => {
        filtro.classList.remove("selected");
      });
      filtros[indexPosition].classList.add("selected");
      filtros[indexPosition].style.fontWeight = "bold";
      filtros[indexPosition].style.opacity = "1";
      filtros[indexPosition].addEventListener("click", () => {
        if (prosseguir) {
          setIndex(indexPosition);
          filtros.forEach((filtro) => {
            filtro.classList.remove("selected");
            filtro.style.opacity = "0.5";
          });
          filtros[indexPosition].classList.add("selected");
          filtros[indexPosition].style.fontWeight = "bold";
          filtros[indexPosition].style.opacity = "1";
        }
      });
    }
  }, [prosseguir]);

  return (
    <DivCadastro>
      <form method="POST">
        <Photo />
        {dados[indexPosition]}
        <div>
          {verify && (
            <div style={{ textAlign: "left", margin: "0 28px" }}>
              <p style={{ color: "red" }}>
                A senha deve ter, no mínimo, 8 caracteres.
              </p>
            </div>
          )}
        </div>
        <DivA>
          <Button handleClick={handleClick} btnRef={btnRef} nome={buttonName} />
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
