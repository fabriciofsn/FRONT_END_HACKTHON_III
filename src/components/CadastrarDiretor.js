import tableColaboradores from "../tables/TableColaboradores";
import { Objects } from "./Objects";
import "../styles/CadastrarDiretor.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";


export const CadastrarDiretor = ({handleSelecionar = () => {}}) => {

    const arrayChefe = tableColaboradores.filter((colaborador) => colaborador.cargoId !== "Diretor")
    const [searchColaborador, setSearchColaborador] = useState('');
    const [filteredColaborador, setFilteredColaborador] = useState(arrayChefe);

    const filterTermColaborador = () => {
        let results = arrayChefe;

        if (searchColaborador != '') {
            results = arrayChefe.filter((colaborador) =>
              colaborador.nome.toLowerCase().includes(searchColaborador.toLowerCase())
            );
    }

    setFilteredColaborador(results)
}

useEffect(() => {
    filterTermColaborador();
}, [searchColaborador])

    return (
        <div className="chefeSetor">
            <h1>CHEFE DO SETOR</h1>
            <input placeholder="PESQUISE AQUI"  onChange={(e) => setSearchColaborador(e.target.value)}/>
            <span><Objects object={filteredColaborador} colaborador={true} chefe={true} handleSelecionar={handleSelecionar}/></span>
        </div>
    )
}