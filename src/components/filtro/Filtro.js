import React from "react";

import styles from "./styles.module.css";

export function Filtro({ icon = "", title = "", onChange, opcoes = [] }) {
  return (
    <div className={styles.filtroContainer}>
      {icon && title && (
        <p>
          {icon}
          {title}
        </p>
      )}
      {opcoes && (
        <div className={styles.opcao} id="radio">
          <input
            type="radio"
            id="todos"
            name={title}
            value="Todos"
            key="todos"
            onChange={() => onChange("")}
          ></input>
          <label>TODOS</label>
        </div>
      )}
      {opcoes &&
        opcoes.map((opcao, index) => {
          return (
            <div className={styles.opcao} id="radio">
              <input
                type="radio"
                id={opcao.id}
                name={title}
                value={opcao.id}
                key={opcao.id}
                onChange={() => onChange(opcao.id)}
              ></input>
              <label key={index} htmlFor={opcao.id}>
                {opcao.nome}
              </label>
            </div>
          );
        })}
    </div>
  );
}
