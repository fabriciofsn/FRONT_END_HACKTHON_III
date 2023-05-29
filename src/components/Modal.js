import React from "react";
import { DivModal } from "../styles/Modal";

const Modal = () => {
  const links = [
    {
      nome: "Login",
      href: "/login",
    },
    {
      nome: "Setores",
      href: "/setor",
    },
    {
      nome: "Departamentos",
      href: "/departamento",
    },

    {
      nome: "Colaboradores",
      href: "/colaborador",
    },
  ];

  return (
    <DivModal>
      <nav>
        <ul>
          {links.map(({ nome, href }) => {
            return (
              <li key={nome}>
                <a href={href}>{nome}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </DivModal>
  );
};

export default Modal;
