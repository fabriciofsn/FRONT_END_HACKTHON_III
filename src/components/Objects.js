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
          categoria={true}
          closeModal={handleClickCloseObject}
          titulo={titulo}
        />
      )}
      {poupupObject && tipo === "setor" && (
        <ModalObject
          objeto={poupupObject}
          categoria={true}
          informacao2="Departamento"
          resposta2={poupupObject.departamentoId}
          closeModal={handleClickCloseObject}
          titulo={titulo}
        />
      )}
      {poupupObject && tipo === "bens" && (
        <ModalObject
          objeto={poupupObject}
          informacao2="Departamento"
          resposta2={poupupObject.departamentoId}
          closeModal={handleClickCloseObject}
        />
      )}
    </div>
  );
}
