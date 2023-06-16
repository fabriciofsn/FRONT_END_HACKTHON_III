import React, { useState } from "react";
import "../styles/Objects.css";
import "../styles/mediaQuery.css";
import perfilJosue from "../assets/perfilJosue.jpg";
import pc from "../assets/pc.jpg";
import { ModalObject } from "./ModalObject";

export function Objects({
  object = null,
  titulo,
  colaborador = false,
  chefe = false,
  handleSelecionar,
  tipo,
}) {
  const [poupupObject, setPoupupObject] = useState(null);
  let inputsBens = [];
  let imputsColaboradores = [];
  let inputsSetor = [];
  let inputsCategoriaOuDep = [];

  if (poupupObject) {
    inputsBens = [
      <input className="inputEditar" type="text" placeholder="nome" defaultValue={poupupObject.nome} />,
      <select className="inputEditarSelect">
        <option key="Gerencia" value="Gerencia" selected={poupupObject.departamentoId === "Gerencia" ? "selected" : ""}>
          Gerência
        </option>
        <option key="contabil" value="contabil" selected={poupupObject.departamentoId === "Contabil" ? "selected" : ""}>
          Contábil
        </option>
        <option key="RH" value="RH" selected={poupupObject.departamentoId === "RH" ? "selected" : ""}>
          RH
        </option>
        <option key="Diretoria" value="Diretoria" selected={poupupObject.departamentoId === "Diretoria" ? "selected" : ""}>
          Diretoria
        </option>
      </select>,
      <select className="inputEditarSelect">
        <option key="Financeiro" value="Financeiro" selected={poupupObject.setorId === "Financeiro" ? "selected" : ""}>
          Financeiro
        </option>
        <option key="Direcao" value="Direcao" selected={poupupObject.setorId === "direcao" ? "selected" : ""}>
          Direção
        </option>
        <option key="Almoxarifado" value="Almoxarifado" selected={poupupObject.setorId === "Almoxarifado" ? "selected" : ""}>
          Almoxarifado
        </option>
      </select>,
      <select className="inputEditarSelect">
        <option key="Novo" value="Novo" selected={poupupObject.estado === "Novo" ? "selected" : ""}>
          Novo
        </option>
        <option key="semi novo" value="semi novo" selected={poupupObject.estado === "semi novo" ? "selected" : ""}>
          semi novo
        </option>
        <option key="roubado" value="roubado" selected={poupupObject.estado === "roubado" ? "selected" : ""}>
          Roubado
        </option>
        <option key="quebrado" value="quebrado" selected={poupupObject.estado === "quebrado" ? "selected" : ""}>
          quebrado
        </option>
      </select>,
      <input className="inputEditar" type="text" placeholder="observações" defaultValue={poupupObject.observacao} />,
    ];

    imputsColaboradores = [
      <input className="inputEditar" type="text" placeholder="nome" defaultValue={poupupObject.nome} />,
      <select className="inputEditarSelect">
        <option key="Gerencia" value="Gerencia" selected={poupupObject.departamentoId === "Gerencia" ? "selected" : ""}>
          Gerência
        </option>
        <option key="contabil" value="contabil" selected={poupupObject.departamentoId === "Contabil" ? "selected" : ""}>
          Contábil
        </option>
        <option key="RH" value="RH" selected={poupupObject.departamentoId === "RH" ? "selected" : ""}>
          RH
        </option>
        <option key="Diretoria" value="Diretoria" selected={poupupObject.departamentoId === "Diretoria" ? "selected" : ""}>
          Diretoria
        </option>
      </select>,
      <select className="inputEditarSelect">
        <option key="Financeiro" value="Financeiro" selected={poupupObject.setorId === "Financeiro" ? "selected" : ""}>
          Financeiro
        </option>
        <option key="Direcao" value="Direcao" selected={poupupObject.setorId === "direcao" ? "selected" : ""}>
          Direção
        </option>
        <option key="Almoxarifado" value="Almoxarifado" selected={poupupObject.setorId === "Almoxarifado" ? "selected" : ""}>
          Almoxarifado
        </option>
      </select>,
      <select className="inputEditarSelect">
        <option key="Diretor" value="Diretor" selected={poupupObject.cargoId === "Diretor" ? "selected" : ""}>
          Diretor
        </option>
        <option key="Vendedor" value="Vendedor" selected={poupupObject.cargoId === "Vendedor" ? "selected" : ""}>
          Vendedor
        </option>
        <option key="Contador" value="Contador" selected={poupupObject.cargoId === "Contador" ? "selected" : ""}>
          Contador
        </option>
      </select>,
      <input className="inputEditar" type="text" placeholder="CPF" defaultValue={poupupObject.cpf} />,
      <input className="inputEditar" type="email" placeholder="Email" defaultValue={poupupObject.email} />,
      <input className="inputEditar" type="text" placeholder="Cidade" defaultValue={poupupObject.cidade} />,
      <input className="inputEditar" type="text" placeholder="Bairro" defaultValue={poupupObject.bairro} />,
      <input className="inputEditar" type="text" placeholder="Rua" defaultValue={poupupObject.rua} />,
      <input className="inputEditar" type="text" placeholder="numero" defaultValue={poupupObject.numero} />,
      <input className="inputEditar" type="text" placeholder="Salário" defaultValue={poupupObject.salario} />,
      <input className="inputEditar" type="text" placeholder="Carga Horaria" defaultValue={poupupObject.cargaHoraria} />,
      <input className="inputEditar" type="text" placeholder="observações" defaultValue={poupupObject.observacao} />


    ];

    inputsSetor = [
      <input className="inputEditar" type="text" placeholder="nome" defaultValue={poupupObject.nome} />,
      <select className="inputEditarSelect">
      <option key="Gerencia" value="Gerencia" selected={poupupObject.departamentoId === "Gerencia" ? "selected" : ""}>
          Gerência
        </option>
        <option key="contabil" value="contabil" selected={poupupObject.departamentoId === "Contabil" ? "selected" : ""}>
          Contábil
        </option>
        <option key="RH" value="RH" selected={poupupObject.departamentoId === "RH" ? "selected" : ""}>
          RH
        </option>
        <option key="Diretoria" value="Diretoria" selected={poupupObject.departamentoId === "Diretoria" ? "selected" : ""}>
          Diretoria
        </option>
      </select>,
    ];

    inputsCategoriaOuDep = [
      <input className="inputEditar" type="text" placeholder="nome" defaultValue={poupupObject.nome} />
    ];
  }

  const handleClickOpenObject = (objeto) => {
    setPoupupObject(objeto);
    console.log(objeto);
  };

  const handleClickCloseObject = () => {
    setPoupupObject(null);
  };
  return (
    <div className="bodyObjects">
      {object.map((object) => {
        return (
          <div
            className="divObjects"
            key={object.id}
            onClick={
              !chefe ? () => handleClickOpenObject(object) : handleSelecionar
            }
          >
            <div className="divObjectsNome">
              {tipo === "colaborador" ? (
                <p>
                  <b>{object.nome}</b>
                </p>
              ) : (
                <h3>{object.nome}</h3>
              )}
              {tipo !== "setor" ? (
                <p>{object.cargoId}</p>
              ) : (
                <p>{object.departamentoId}</p>
              )}
            </div>
            <div className="divObjectsDepartamento">
              {tipo === "bens" && <p>Código: {object.codigo}</p>}
              {colaborador && <p>{object.departamentoId}</p>}
              {tipo === "setor" ? <p>Chefe: {object.chefeId ? object.chefeId : "Sem chefe"}</p> : <p>{object.setorId}</p>}
            </div>
            {colaborador && (
              <div className="divObjectsChefe">
                {object.cargoId === "Diretor" &&
                  object.setorId !== "Direcao" ? (
                  <p className="cargoChefe">CS</p>
                ) : (
                  ""
                )}
                {object.cargoId === "Diretor" &&
                  object.setorId === "Direcao" ? (
                  <p className="cargoDiretor">DD</p>
                ) : (
                  ""
                )}
                {tipo === "bens" && (
                  <p className="showDesktop">Estado: {object.estado}</p>
                )}
                {tipo === "bens" && (
                  <p className="showDesktop">Categoria: {object.categoriaId}</p>
                )}
                {tipo === "bens" && (
                  <p className="showDesktop">
                    Adiquirido: {object.dataAdiquirido}
                  </p>
                )}
              </div>
            )}
            <div className="divObjectsImagem">
              {colaborador && tipo !== "bens" ? (
                <img src={perfilJosue} width="60px" height="70px" />
              ) : (
                ""
              )}
              {colaborador && tipo === "bens" ? (
                <img src={pc} width="60px" height="70px" />
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}

      {poupupObject && tipo === "colaborador" && (
        <ModalObject
          objeto={poupupObject}
          photoColaborador={true}
          inputs={imputsColaboradores}
          informacao2="Departamento"
          resposta2={poupupObject.departamentoId}
          informacao3="Setor"
          resposta3={poupupObject.setorId}
          informacao4="Cargo"
          resposta4={poupupObject.cargoId}
          informacao5="CPF"
          resposta5={poupupObject.cpf}
          informacao6="Email"
          resposta6={poupupObject.email}
          informacao7="Endereço"
          resposta7={poupupObject.cidade + ", " + poupupObject.bairro + ", " + poupupObject.rua + ", " + poupupObject.numero}
          informacao8="Salário"
          resposta8={poupupObject.salario}
          informacao9="Carga Horária"
          resposta9={poupupObject.cargaHoraria}
          informacao10="Home Office?"
          resposta10={poupupObject.homeOfice}
          informacao11="Bens em mãos"
          resposta11={poupupObject.bem}
          informacao12="Observações"
          resposta12={poupupObject.observacao}
          closeModal={handleClickCloseObject}
        />
      )}
      {poupupObject && tipo === "categoria" && (
        <ModalObject
          objeto={poupupObject}
          inputs={inputsCategoriaOuDep}
          categoria={true}
          closeModal={handleClickCloseObject}
          titulo={titulo}
        />
      )}
      {poupupObject && tipo === "setor" && (
        <ModalObject
          objeto={poupupObject}
          chefe="Trocar Chefe"
          inputs={inputsSetor}
          categoria={true}
          informacao2="Departamento"
          resposta2={poupupObject.departamentoId}
          informacao3="Chefe"
          resposta3={poupupObject.chefeId}
          informacao4="Função"
          closeModal={handleClickCloseObject}
          titulo={titulo}
        />
      )}
      {poupupObject && tipo === "bens" && (
        <ModalObject
          objeto={poupupObject}
          inputs={inputsBens}
          informacao2="Departamento"
          resposta2={poupupObject.departamentoId}
          informacao3="Setor"
          resposta3={poupupObject.setorId}
          informacao4="Categoria"
          resposta4={poupupObject.categoriaId}
          informacao5="Código"
          resposta5={poupupObject.codigo}
          informacao6="Estado"
          resposta6={poupupObject.estado}
          informacao7="Adiquirido dia"
          resposta7={poupupObject.dataAdiquirido}
          informacao8="Adiquirido por"
          resposta8={poupupObject.valorAdiquirido}
          informacao9="Valor hoje"
          resposta9={poupupObject.valorHoje}
          informacao10="Observações"
          resposta10={poupupObject.observacao}
          closeModal={handleClickCloseObject}
        />
      )}
    </div>
  );
}
