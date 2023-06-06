import { DivCadastro } from "../styles/Cadastro";


export function ModalObject(objeto = null) {
    return (
        <DivCadastro>
            <p>{objeto.nome}</p>
        </DivCadastro>
    );
}