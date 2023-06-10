import React, {useState} from "react";
import { DivCadastro } from "../styles/Cadastro";
import { Visualizar } from "./Visualizar";
import "../styles/ModalObject.css";
import PhotoObject from "./PhotoObject";




export function ModalObject({objeto =null, closeModal, informacao2, resposta2, informacao3, resposta3, informacao4, resposta4}) {

    const [content, setContent] = useState("visualizar")
    
    const handleChangeContent = (change) =>{
        setContent(change)
    }

    return (
        <DivCadastro className="ModalObject">
            <PhotoObject />
            <div className="ModalObjectContent">
            {content === "visualizar" && <Visualizar objeto= {objeto} informacao2={informacao2} resposta2={resposta2} informacao3={informacao3} resposta3={resposta3} informacao4={informacao4} resposta4={resposta4} />}
            {content === "editar" && <p>editar</p>}
            {content === "excluir" && <p>excluir</p>}
            </div>
        {content === "visualizar" ? <p className="selected" onClick={() =>handleChangeContent("visualizar")}>visualizar</p> : <p onClick={() =>handleChangeContent("visualizar")}>visualizar</p>}
        {content === "editar" ? <p className="selected" onClick={() =>handleChangeContent("editar")}>editar</p> : <p onClick={() =>handleChangeContent("editar")}>editar</p>}
        {content === "excluir" ? <p className="selected" onClick={() =>handleChangeContent("excluir")}>excluir</p> : <p onClick={() =>handleChangeContent("excluir")}>excluir</p>}

        <button onClick={closeModal}>fechar</button>

        </DivCadastro>
    );
}