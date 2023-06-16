import { useState } from "react";
import { DivInputText } from "../styles/AdicionarSetor";
import "../styles/Editar.css";
import {CadastrarDiretor} from "./CadastrarDiretor";


export const Editar = ({inputs = [], chefe}) =>{

    const [changeChefe, setChangeChefe] = useState(false)

    return(
        <div className="bodyEditar">
        {inputs.map((input) =>{
            return(
                <div>
                    <DivInputText>{input}</DivInputText>
                </div>
            )
        })}
        <p onClick={() => setChangeChefe(true)}>{chefe}</p>
        {changeChefe && <CadastrarDiretor handleSelecionar={() => setChangeChefe(false)}/>}
        </div>
    );
} 