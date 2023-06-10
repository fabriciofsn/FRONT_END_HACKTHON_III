import React, { useState } from "react";
import { DivCadastro } from "../styles/Cadastro";
import { Visualizar } from "./Visualizar";
import "../styles/ModalObject.css";
import PhotoObject from "./PhotoObject";
import { DivSetor } from "../styles/AdicionarSetor";




export function ModalObject({ objeto = null, titulo, categoria = false, closeModal, informacao2, resposta2, informacao3, resposta3, informacao4, resposta4 }) {

    const [content, setContent] = useState("visualizar")

    const handleChangeContent = (change) => {
        setContent(change)
    }

    return (
        <div>
            {!categoria && <DivCadastro className="ModalObject">
                <PhotoObject />
                <div className="ModalObjectContent">
                    {content === "visualizar" && <Visualizar objeto={objeto} informacao2={informacao2} resposta2={resposta2} informacao3={informacao3} resposta3={resposta3} informacao4={informacao4} resposta4={resposta4} />}
                    {content === "editar" && <p>editar</p>}
                    {content === "excluir" && <p>excluir</p>}
                </div>
                <div className="changeContentModal">
                    {content === "visualizar" ? <p className="selected" onClick={() => handleChangeContent("visualizar")}>visualizar</p> : <p onClick={() => handleChangeContent("visualizar")}>visualizar</p>}
                    {content === "editar" ? <p className="selected" onClick={() => handleChangeContent("editar")}>editar</p> : <p onClick={() => handleChangeContent("editar")}>editar</p>}
                    {content === "excluir" ? <p className="selected" onClick={() => handleChangeContent("excluir")}>excluir</p> : <p onClick={() => handleChangeContent("excluir")}>excluir</p>}
                </div>
                <button className="buttonColaborador" onClick={closeModal}>fechar</button>

            </DivCadastro>}
            {categoria && <DivSetor className="ModalObject">
                <h1>{titulo}</h1>
                <div className="ModalObjectContent">
                    {content === "visualizar" && <Visualizar objeto={objeto} categoria={true} informacao2={informacao2} resposta2={resposta2} informacao3={informacao3} resposta3={resposta3} informacao4={informacao4} resposta4={resposta4} />}
                    {content === "editar" && <p>editar</p>}
                    {content === "excluir" && <p>excluir</p>}
                </div>
                <div className="changeContentModal">
                    {content === "visualizar" ? <p className="selected" onClick={() => handleChangeContent("visualizar")}>visualizar</p> : <p onClick={() => handleChangeContent("visualizar")} className="pCategoria">visualizar</p>}
                    {content === "editar" ? <p className="selected" onClick={() => handleChangeContent("editar")}>editar</p> : <p onClick={() => handleChangeContent("editar")} className="pCategoria">editar</p>}
                    {content === "excluir" ? <p className="selected" onClick={() => handleChangeContent("excluir")}>excluir</p> : <p onClick={() => handleChangeContent("excluir")} className="pCategoria">excluir</p>}
                </div>
                <button className="buttonCategoria" onClick={closeModal}>fechar</button>

            </DivSetor>}
        </div>
    );
}