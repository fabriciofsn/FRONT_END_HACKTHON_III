import React, { useState } from "react";
import {
  DivSetor,
  DivInputText,
  DivButtonCadastrar,
  DivCancelar,
} from "../styles/AdicionarSetor";
import {EnvolveModal} from "../styles/Modal";
import { CadastrarDiretor } from "./CadastrarDiretor";

const AdicionarSetor = ({
  title = "",
  input = null,
  array = null,
  chefe = "",
  button = "",
  handleClick = () => { },
  handleClickAvancar = () => { },
  direcao = false,
  cancelar = "",
}) => {

  const [cadastrarChefe, setCadastrarChefe] = useState(false);

  return (
    <EnvolveModal>
      <DivSetor>
        <h2>{title}</h2>
        <form onSubmit={handleClickAvancar}>
          <DivInputText>{input}</DivInputText>
          {array && !direcao ? (
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
          ) : ""}

          <a onClick={() => setCadastrarChefe(true)}>
            <i>{chefe}</i>
          </a>
          <DivButtonCadastrar>
            <button type="submit">{button}</button>
          </DivButtonCadastrar>
        </form>
        <DivCancelar>
          <button onClick={handleClick}>
            <i>{cancelar}</i>
          </button>
        </DivCancelar>
        {cadastrarChefe && (<CadastrarDiretor handleSelecionar={() => setCadastrarChefe(false)} />)}
      </DivSetor>
    </EnvolveModal>

  );
};

export default AdicionarSetor;
