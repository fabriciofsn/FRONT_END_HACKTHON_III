import React from "react";
import {
  DivSetor,
  DivInputText,
  DivButtonCadastrar,
  DivCancelar,
} from "../styles/AdicionarSetor";

const AdicionarSetor = ({
  title = "",
  input = null,
  array = null,
  chefe = "",
  button = "",
  handleClick = () => {},
  cancelar = "",
}) => {
  return (
    <DivSetor>
      <h2>{title}</h2>
      <form>
        <DivInputText>{input}</DivInputText>
        {array && (
          <DivInputText>
            <select>
              {array.map((arr) => {
                return (
                  <option key={arr} value={arr}>
                    {arr}
                  </option>
                );
              })}
            </select>
          </DivInputText>
        )}
      </form>
      <a href="#">
        <i>{chefe}</i>
      </a>
      <DivButtonCadastrar>
        <button>{button}</button>
      </DivButtonCadastrar>
      <DivCancelar>
        <button onClick={handleClick}>
          <i>{cancelar}</i>
        </button>
      </DivCancelar>
    </DivSetor>
  );
};

export default AdicionarSetor;
