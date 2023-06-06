import "../styles/Visualizar.css"

export function Visualizar(objeto= null){

    objeto = objeto.objeto

    return(
        <div className="divBody">
            <span>
                <p>nome</p><p>{objeto.nome}</p>
            </span>
            <span>
                <p>Departamento</p><p>{objeto.departamentoId}</p>
            </span>
            <span>
                <p>Setor</p><p>{objeto.setorId}</p>
            </span>
            <span>
                <p>Cargo</p><p>{objeto.cargoId}</p>
            </span>
            
        </div>
    )
}