import React from "react";
import Input from "./Input";
import {
  DivCadastro,
  DivInputFile,
  DivAdjustFile,
  DivIcon,
  DivA,
} from "../styles/Cadastro";
import { BiCloudUpload } from "react-icons/bi";
import Button from "./Button";

const Cadastro = (props) => {
  return (
    <DivCadastro>
      <form method="POST">
        <div>
          <DivAdjustFile>
            <DivInputFile>
              <input type="file" />
              <DivIcon>
                <BiCloudUpload color="#061226" size={60} />
              </DivIcon>
            </DivInputFile>
          </DivAdjustFile>
          <Input type="text" placeholder="Nome" />
          <Input type="number" placeholder="CPF" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Senha" />
          <Input type="password" placeholder="Confirmar senha" />
          <Button nome="Avançar" />
          <DivA>
            <a href="#" onClick={props.handleClick}>
              Cancelar
            </a>
          </DivA>
        </div>
      </form>
    </DivCadastro>
  );
};

export default Cadastro;
