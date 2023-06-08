import { DivSetor } from "../styles/AdicionarSetor";
import tableColaboradores from "../tables/TableColaboradores";
import { Objects } from "./Objects";
import "../styles/CadastrarDiretor.css"


export const CadastrarDiretor = ({handleSelecionar = () => {}}) => {

    let arrayChefe = tableColaboradores.filter((colaborador) => colaborador.cargoId !== "Diretor")

    return (
        <DivSetor id="chefeSetor">
            <h1>CHEFE DO SETOR</h1>
            <input placeholder="PESQUISE AQUI" />
            <Objects object={arrayChefe} colaborador={true} chefe={true} handleSelecionar={handleSelecionar}/>
        </DivSetor>
    )
}