import React, { useEffect, useRef, useState } from "react";
import { DivCadastro, DivA, DivAccordion } from "../styles/Cadastro";
import { EnvolveModal } from "../styles/Modal";
import Photo from "./Photo";
import Dados from "./Dados";
import Button from "../components/Button";
import Endereco from "./Endereco";
import Atributos from "./Atributos";
import "../styles/ColaboradorScreen.css";

const Cadastro = (props) => {
  const divRef = useRef();
  const btnRef = useRef();
  const [buttonName, setButtonName] = useState("Avançar");
  const [verify, setVerify] = useState(false);
  const [prosseguir, setProsseguir] = useState(false);
  const [uf, setUf] = useState("");
  const [select, setSelect] = useState(null);
  const [filtrarCidade, setFiltrarCidade] = useState([]);
  const [valorCidade, setValorCidade] = useState(null);
  const [indexPosition, setIndex] = useState(0);

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");

  //ATRIBUTOS
  const [cargaHoraria, setCargaHoraria] = useState(null);
  const [salario, setSalario] = useState(null);
  const [homeOffice, setHomeOffice] = useState("sim");
  const [cod, setCod] = useState(null);
  const [dep, setDep] = useState(null);
  const [car, setCar] = useState(null);

  useEffect(() => {
    if (cargaHoraria && salario && cod && dep && car) {
      btnRef.current.style.opacity = "1";
      setProsseguir(true);
    } else {
      btnRef.current.style.opacity = "0.7";
      setProsseguir(false);
    }
  }, [cargaHoraria, salario, homeOffice, cod, dep, car]);

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
    if (regexCep && bairro && rua && select && filtrarCidade && bairro && rua) {
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
      cod={cod}
      setCod={setCod}
      dep={dep}
      setDep={setDep}
      car={car}
      setCar={setCar}
    />,
  ];

  useEffect(() => {
    if (divRef.current) {
      const filtros = divRef.current.querySelectorAll("span");
      filtros.forEach((filtro) => {
        filtro.classList.remove("selected_");
      });
      filtros[indexPosition].classList.add("selected_");
      filtros[indexPosition].style.fontWeight = "bold";
      filtros[indexPosition].style.opacity = "1";
      filtros[indexPosition].addEventListener("click", () => {
        if (prosseguir) {
          setIndex(indexPosition);
          filtros.forEach((filtro) => {
            filtro.classList.remove("selected_");
            filtro.style.opacity = "0.5";
          });
          filtros[indexPosition].classList.add("selected_");
          filtros[indexPosition].style.fontWeight = "bold";
          filtros[indexPosition].style.opacity = "1";
        }
      });
    }
  }, [prosseguir]);

  return (
    <EnvolveModal>
      <DivCadastro>
        <form method="POST">
          <Photo imagemPerfil={null} />
          <div className="form-inputs">
            {dados[indexPosition]}
            {verify && (
              <div
                style={{
                  textAlign: "left",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <p style={{ color: "red" }}>
                  A senha deve ter, no mínimo, 8 caracteres.
                </p>
              </div>
            )}

            <DivA>
              <div>
                <Button
                  handleClick={handleClick}
                  btnRef={btnRef}
                  nome={buttonName}
                />
              </div>
              <a href="#" onClick={props.handleClick}>
                Cancelar
              </a>
            </DivA>
          </div>
          <DivAccordion ref={divRef}>
            <span className="selected_">Dados</span>
            <span>Endereço</span>
            <span>Atributos</span>
          </DivAccordion>
        </form>
      </DivCadastro>
    </EnvolveModal>
  );
};

export default Cadastro;
