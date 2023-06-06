import { DivCadastro } from "../styles/Cadastro";


export function ModalObject(objeto = null) {

    objeto = objeto.objeto
    console.log("ModalObject")
    console.log(objeto)
    return (
        <DivCadastro>
            <p>{objeto.id}</p>
            <p>teste</p>
        </DivCadastro>
    );
}