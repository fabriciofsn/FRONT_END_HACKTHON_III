import React, {useState} from "react";
import { DivCadastro } from "../styles/Cadastro";
import { Visualizar } from "./Visualizar";
import "../styles/ModalObject.css";
import PhotoObject from "./PhotoObject";




export function ModalObject(objeto = null, closeModal) {

    const [content, setContent] = useState("visualizar")
    
    const handleChangeContent = (change) =>{
        setContent(change)
    }

    objeto = objeto.objeto
    return (
        <DivCadastro className="ModalObject">
            <PhotoObject />
            <div className="ModalObjectContent">
            {content === "visualizar" && <Visualizar objeto= {objeto} />}
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