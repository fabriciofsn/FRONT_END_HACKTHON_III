import React from "react";
import Photo from "./Photo";

import { DivOverFlow } from "../styles/Endereco";
import Title from "./Title";
import { DivInput } from "../styles/Input";

const Endereco = (props) => {
  return (
    <DivOverFlow>
      <Photo />
      <Title title="adicionar colaborador" />
      <DivInput>
        <input
          type="text"
          placeholder="CEP"
          value={props.cep}
          onChange={props.getCep}
        />
      </DivInput>
      <DivInput>
        <select
          value={props.valor}
          onChange={({ target }) => props.setValor(target.value)}
        >
          <option selected disabled value="estado">
            Estado
          </option>
          {props.UF.map(({ sigla }) => {
            return <option key={sigla}>{sigla}</option>;
          })}
        </select>
      </DivInput>
      <DivInput>
        <select
          value={props.valorCidade}
          onChange={({ target }) => props.setValorCidade(target.value)}
        >
          <option selected disabled value="cidade">
            Cidade
          </option>
          {props.cidade &&
            props.cidade.map(({ nome }) => {
              return (
                <option key={nome} value={nome}>
                  {nome}
                </option>
              );
            })}
        </select>
      </DivInput>
      <DivInput>
        <input
          type="text"
          placeholder="Bairro"
          value={props.valor}
          onChange={props.getBairro}
        />
      </DivInput>
      <DivInput>
        <input
          type="text"
          placeholder="Rua"
          value={props.rua}
          onChange={props.getRua}
        />
      </DivInput>
    </DivOverFlow>
  );
};

export default Endereco;
