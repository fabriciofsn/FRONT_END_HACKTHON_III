import { DivCadastro } from "../styles/Cadastro";
import { Visualizar } from "./Visualizar";
import Photo from "../components/Photo";
import "../styles/ModalObject.css";
import perfilJosue from "../assets/perfilJosue.jpg"



export function ModalObject(objeto = null) {

    objeto = objeto.objeto
    return (
        <DivCadastro className="alteracoes">
            <Photo imagemPerfil = {perfilJosue}/>
            <Visualizar objeto= {objeto} />
        </DivCadastro>
    );
}