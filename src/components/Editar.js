import { DivInputText } from "../styles/AdicionarSetor";


export const Editar = ({inputs = []}) =>{
    return(
        <>
        {inputs.map((input) =>{
            return(
                <div>
                    <DivInputText>{input}</DivInputText>
                </div>
            )
        })}
        </>
    );
} 