import React from "react";
import { DivModal } from "../styles/Modal";
import { Link } from "react-router-dom";

const Modal = () => {
  const links = [
    {
      nome: "Home",
      href: "/",
    },
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
    {
      nome: "Categorias",
      href: "/categoria",
    },
    {
      nome: "Bens",
      href: "/bens",
    },
  ];

  return (
    <DivModal>
      <nav>
        <ul>
          {links.map(({ nome, href }) => {
            return (
              <li key={nome}>
                <Link to={href}>{nome}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </DivModal>
  );
};

export default Modal;
