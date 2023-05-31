import React, { useState, useEffect } from "react";
import { tableDepartamentos } from "../tables/TableDepartamentos";
import { tableSetores } from "../tables/TableSetores";



export function FiltroDesktop({ icon="", title="", setor= false, array= null}){

    let opcaoSelecionada = "";

    let arrayFilter = array

    // const changeRadioSetoresFilter = () => {
        if(setor === true){arrayFilter = array.filter((setor) => setor.departamentoId === "RH")}
    

    const handleInputChange = (event) => {
        opcaoSelecionada = event.target.value;
        console.log(opcaoSelecionada)
        console.log(arrayFilter)
        // changeRadioSetoresFilter()
      };

   
    
    

    return(
        <div>
            {icon && title && (
                <span>
                    {icon}
                    {title}
                </span>
            )}<br/>

           {array &&
        arrayFilter.map((valor) => {
          
          return (
            <>
            <input type="radio" id={valor.id} name={title} value={valor.id} key={valor.id} onChange={handleInputChange} ></input>
               <label htmlFor={valor.id}>{valor.nome}</label><br></br>
            </>
          );
        })}
                    
            
        </div>
    );
}



