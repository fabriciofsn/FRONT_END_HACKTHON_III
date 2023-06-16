import React, { useState } from "react";
import { DivCadastro } from "../styles/Cadastro";
import { Visualizar } from "./Visualizar";
import "../styles/ModalObject.css";
import PhotoObject from "./PhotoObject";
import { DivSetor } from "../styles/AdicionarSetor";
import {EnvolveModal} from "../styles/Modal";
import { Excluir } from "./Excluir";
import { Editar } from "./Editar";




export function ModalObject({ objeto = null, chefe, titulo, inputs, photoColaborador, categoria = false, closeModal, informacao2, resposta2, informacao3, resposta3, informacao4, resposta4, informacao5, resposta5, informacao6, resposta6, informacao7, resposta7, informacao8, resposta8, informacao9, resposta9, informacao10, resposta10, informacao11, resposta11, informacao12, resposta12, informacao13, resposta13 }) {

    const [content, setContent] = useState("visualizar")

    const handleChangeContent = (change) => {
        setContent(change)
    }

    return (
        <EnvolveModal>
            {!categoria && 
            <DivCadastro id="ModalObject">
                <PhotoObject photoColaborador={photoColaborador}/>
                {/* {content === "excluir" && <h1>EXCLUIR {titulo}?</h1>} */}
                <div className="ModalObjectContent">
                    {content === "visualizar" && <Visualizar objeto={objeto} informacao2={informacao2} resposta2={resposta2} informacao3={informacao3} resposta3={resposta3} informacao4={informacao4} resposta4={resposta4} informacao5={informacao5} resposta5={resposta5} informacao6={informacao6} resposta6={resposta6} informacao7={informacao7} resposta7={resposta7} informacao8={informacao8} resposta8={resposta8} informacao9={informacao9} resposta9={resposta9} informacao10={informacao10} resposta10={resposta10} informacao11={informacao11} resposta11={resposta11} informacao12={informacao12} resposta12={resposta12} informacao13={informacao13} resposta13={resposta13} />}
                    {content === "editar" && <Editar inputs= {inputs} />}
                    {content === "excluir" && <Excluir closeModal={closeModal}/>}
                </div>
                <div className="changeContentModal">
                    {content === "visualizar" ? <p className="selected" onClick={() => handleChangeContent("visualizar")}>visualizar</p> : <p onClick={() => handleChangeContent("visualizar")}>visualizar</p>}
                    {content === "editar" ? <p className="selected" onClick={() => handleChangeContent("editar")}>editar</p> : <p onClick={() => handleChangeContent("editar")}>editar</p>}
                    {content === "excluir" ? <p className="selected" onClick={() => handleChangeContent("excluir")}>excluir</p> : <p onClick={() => handleChangeContent("excluir")}>excluir</p>}
                </div>
                <div id="botoes">
                {content === "editar" && <button className="buttonColaborador" onClick={closeModal}>Confirmar Edições</button>}
                <button className="buttonColaborador" onClick={closeModal}>fechar</button>
                </div>

            </DivCadastro>}
            {categoria && <DivSetor id="ModalObject2">
                {content === "visualizar" && <h1>VISUALIZAR {titulo}</h1>}
                {content === "editar" && <h1>EDITAR {titulo}</h1>}
                {content === "excluir" && <h1>EXCLUIR {titulo}?</h1>}
                <div className="ModalObjectContent">
                    {content === "visualizar" && <Visualizar objeto={objeto} categoria={true} informacao2={informacao2} resposta2={resposta2} informacao3={informacao3} resposta3={resposta3} informacao4={informacao4} resposta4={resposta4}/>}
                    {content === "editar" && <Editar inputs= {inputs} chefe= {chefe} />}
                    {content === "excluir" && <Excluir closeModal={closeModal}/>}
                </div>
                <div className="changeContentModal">
                    {content === "visualizar" ? <p className="selected" onClick={() => handleChangeContent("visualizar")}>visualizar</p> : <p onClick={() => handleChangeContent("visualizar")} className="pCategoria">visualizar</p>}
                    {content === "editar" ? <p className="selected" onClick={() => handleChangeContent("editar")}>editar</p> : <p onClick={() => handleChangeContent("editar")} className="pCategoria">editar</p>}
                    {content === "excluir" ? <p className="selected" onClick={() => handleChangeContent("excluir")}>excluir</p> : <p onClick={() => handleChangeContent("excluir")} className="pCategoria">excluir</p>}
                </div>
                {content === "editar" && <button className="buttonColaborador" onClick={closeModal}>Confirmar Edições</button>}
                <button className="buttonCategoria" onClick={closeModal}>fechar</button>

            </DivSetor>}
        </EnvolveModal>
    );
}