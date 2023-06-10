import React, {useState} from "react";
import "../styles/Excluir.css";

export const Excluir = ({closeModal}) =>{
    const [opcao, setOpcao] = useState("tt");

    const mudarOpcao = (op) =>{
        setOpcao(op)
    }


    return(
        <div className="bodyExcluir">
            <button onClick={() => mudarOpcao("sim")} className={opcao === "sim" ? "buttonSelecionado" : ""}>Sim</button>
            <button onClick={() => mudarOpcao("nao")} className={opcao === "nao" ? "buttonSelecionado" : ""}>Não</button>
            <div>
                {opcao === "sim" && <button onClick={closeModal}>Confirmar</button>}
            </div>
        </div>
    );
}