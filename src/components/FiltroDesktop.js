import React, { useState, useEffect } from "react";
import { tableSetores } from "../tables/TableSetores";



export function FiltroDesktop({ icon="", title="", departamento= false, array= null}){

    let opcaoSelecionada = ""

    const [arrayFilter, setArrayFilter] = useState(tableSetores)

    // const changeRadioSetoresFilter = () => {
        // if(setor === true){arrayFilter = array.filter((setor) => setor.departamentoId === opcaoSelecionada)}

        const changeRadioSetoresFilter = () =>{
           setArrayFilter(tableSetores.filter((setor) => setor.departamentoId === opcaoSelecionada))
        }  

        useEffect(() => {
          changeRadioSetoresFilter();
        }, []);
          

    const handleInputChange = (event) => {
        opcaoSelecionada = event.target.value;
        changeRadioSetoresFilter()
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
        array.map((valor) => {
          
          return (
            <>
            <input type="radio" id={valor.id} name={title} value={valor.id} key={valor.id} onChange={handleInputChange} ></input>
               <label htmlFor={valor.id}>{valor.nome}</label><br></br>
            </>
          );
        })
      
        }

        {departamento && <p>{icon}Setor</p> }
        {departamento && arrayFilter.map((setor) =>{

          return(
            <>
              <input type="radio" id={setor.id} name={"setor"} value={setor.id} key={setor.id}></input>
               <label htmlFor={setor.id}>{setor.nome}</label><br></br>
            </>
          )
        })}               
            
        </div>
    );
      
}



