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
      <h1>{props.title}</h1>
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
      <p>
        <i>{props.chefe}</i>
      </p>
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
