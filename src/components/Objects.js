import React from "react";
import "../styles/Objects.css";


export function Objects({object=null, openObject= null}){

    return(
        <div className="bodyObjects">
        {object.map((object) => {
          return(
            <div className="divObjects" index={object.id}>{object.nome}</div>
          )
        })}
        </div>
    );

}