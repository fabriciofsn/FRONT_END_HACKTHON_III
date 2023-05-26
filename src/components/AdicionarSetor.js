import React, { useState } from "react";
import {
  DivSetor,
  DivInputText,
  DivButtonCadastrar,
  DivCancelar,
} from "../styles/AdicionarSetor";

const AdicionarSetor = (props) => {
  return (
    <DivSetor>
      <h2>{props.title}</h2>
      <form>
        <DivInputText>
          <input type="text" placeholder="Nome" required />
        </DivInputText>
        <DivInputText>
          <select>
            {props.array.map((arr) => {
              return (
                <option key={arr} value={arr}>
                  {arr}
                </option>
              );
            })}
          </select>
        </DivInputText>
      </form>
      <a href="#">
        <i>{props.chefe}</i>
      </a>
      <DivButtonCadastrar>
        <button>{props.button}</button>
      </DivButtonCadastrar>
      <DivCancelar>
        <button onClick={props.handleClick}>
          <i>{props.cancelar}</i>
        </button>
      </DivCancelar>
    </DivSetor>
  );
};

export default AdicionarSetor;
