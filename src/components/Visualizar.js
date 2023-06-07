import "../styles/Visualizar.css"

export function Visualizar({objeto= null}){


    return(
        <div className="divBody">
            <span>
                <p className="p1">Nome</p><p className="p2">{objeto.nome}</p>
            </span>
            <span>
                <p className="p1">Departamento</p><p className="p2">{objeto.departamentoId}</p>
            </span>
            <span>
                <p className="p1">Setor</p><p className="p2">{objeto.setorId}</p>
            </span>
            <span>
                <p className="p1">Cargo</p><p className="p2">{objeto.cargoId}</p>
            </span>
            
        </div>
    )
}