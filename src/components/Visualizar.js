import "../styles/Visualizar.css"

export function Visualizar({objeto= null, informacao2, resposta2, informacao3, resposta3, informacao4, resposta4}){


    return(
        <div className="divBody">
            <span>
                <p className="p1">Nome</p><p className="p2">{objeto.nome}</p>
            </span>
            <span>
                <p className="p1">{informacao2}</p><p className="p2">{resposta2}</p>
            </span>
            <span>
                <p className="p1">{informacao3}</p><p className="p2">{resposta3}</p>
            </span>
            <span>
                <p className="p1">{informacao4}</p><p className="p2">{resposta4}</p>
            </span>
            
        </div>
    )
}