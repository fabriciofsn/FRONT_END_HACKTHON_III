import React from "react";
import Header from "../components/Header";
import { DivError } from "../styles/Error404";
import { BiError } from "react-icons/bi";

const Error404 = () => {
  return (
    <div>
      <Header />
      <DivError>
        <div>
          <BiError color="#eb7b0a" size={50} />
          <h1>404</h1>
          <span>Página não encontrada. :/</span>
          <p>Desculpa, a página que você está procurando não existe.</p>
        </div>
      </DivError>
    </div>
  );
};

export default Error404;
