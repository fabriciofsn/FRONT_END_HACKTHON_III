import React, {useState} from "react";
import "../styles/Objects.css";
import perfilJosue from "../assets/perfilJosue.jpg"
import { ModalObject } from "./ModalObject";


export function Objects({ object = null, colaborador = false }) {

  const [poupupObject, setPoupupObject] = useState(null);

  const handleClickOpenObject = (objeto) =>{
    setPoupupObject(objeto)
    console.log(poupupObject)
  }
  return (
    <div className="bodyObjects">
      {object.map((object) => {
        return (
          <div className="divObjects" index={object.id} onClick={() => handleClickOpenObject(object)}>
            <div className="divObjectsNome">
              <p><b>{object.nome}</b></p>
              <p>{object.cargoId}</p>
            </div>
            <div className="divObjectsDepartamento">
              <p>{object.DepartamentoId}</p>
              <p>{object.setorId}</p>
            </div>
            <div className="divObjectsChefe">
              {object.cargoId === "Diretor" && object.setorId !== "Direcao" ? <p className="cargoChefe">CS</p> : ""}
              {object.cargoId === "Diretor" && object.setorId === "Direcao" ? <p className="cargoDiretor">DD</p> : ""}
            </div>
            <div className="divObjectsImagem">{colaborador ? <img src={perfilJosue} width="60px" height="70px" /> : ""}</div>
          </div>
        )
      })}

      {poupupObject && <ModalObject objeto={poupupObject} />}
    </div>
  );

}