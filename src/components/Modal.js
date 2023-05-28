import React from "react";
import { DivModal } from "../styles/Modal";

const Modal = () => {
  return (
    <DivModal>
      <nav>
        <ul>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/setor">Setores</a>
          </li>
          <li>
            <a href="/departamentos">Departamentos</a>
          </li>
          <li>
            <a href="/funcionarios">Funcionários</a>
          </li>
        </ul>
      </nav>
    </DivModal>
  );
};

export default Modal;
