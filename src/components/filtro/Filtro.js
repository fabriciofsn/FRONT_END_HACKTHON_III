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

      {opcoes &&
        opcoes.map((opcao) => {
          return (
            <div className={styles.opcao}>
              <input
                type="radio"
                id={opcao.id}
                name={title}
                value={opcao.id}
                key={opcao.id}
                onChange={() => onChange(opcao.id)}
              ></input>
              <label key={opcao.nome} htmlFor={opcao.id}>
                {opcao.nome}
              </label>
            </div>
          );
        })}
    </div>
  );
}
