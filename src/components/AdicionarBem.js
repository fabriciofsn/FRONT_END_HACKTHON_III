import { EnvolveModal } from "../styles/Modal";
import { DivCadastro } from "../styles/Cadastro";
import Photo from "./Photo";
import Button from "../components/Button";
import "../styles/Editar.css";
import "../styles/AdicionarBem.css";
import { DivInputText } from "../styles/AdicionarSetor";
import { useState } from "react";
import codigoDeBarras from "../assets/codigoDeBarras.png"

export const AdicionarBens = ({handleClick}) =>{
    const [codigoBarras, setCodigoBarras] = useState(false)
    const [adicionando, setAdicionando] = useState(true)

    const fCodigoBarras = () =>{
        setCodigoBarras(true);
        setAdicionando(false)
    }

    return(
    <div>
        {adicionando && <EnvolveModal>
      <DivCadastro>
        <form>
          <Photo imagemPerfil={null} />
            <div className="bodyAdicionarBem">
            <DivInputText><input className="inputEditar" type="text" placeholder="Nome"  /></DivInputText>
            <DivInputText><select className="inputEditarSelect">
                <option key="Gerencia" value="Gerencia">
                Gerência
                </option>
                <option key="contabil" value="contabil">
                Contábil
                </option>
                <option key="RH" value="RH">
                RH
                </option>
                <option key="Diretoria" value="Diretoria">
                Diretoria
                </option>
            </select></DivInputText>
            <DivInputText><select className="inputEditarSelect">
                <option key="Financeiro" value="Financeiro">
                Financeiro
                </option>
                <option key="Direcao" value="Direcao">
                Direção
                </option>
                <option key="Almoxarifado" value="Almoxarifado">
                Almoxarifado
                </option>
            </select></DivInputText>
            <DivInputText><select className="inputEditarSelect">
            <option key="Novo" value="Novo">
            Novo
            </option>
            <option key="semi novo" value="semi novo">
            semi novo
            </option>
            <option key="roubado" value="roubado">
            Roubado
            </option>
            <option key="quebrado" value="quebrado">
            quebrado
            </option>
        </select></DivInputText>
        <p>Adiquirido em:</p>
        <DivInputText><input className="inputEditar" type="date" placeholder="Data da aquisição"  /></DivInputText>
        <DivInputText><input className="inputEditar" type="number" placeholder="Valor"  /></DivInputText>
        <DivInputText><input className="inputEditar" type="text" placeholder="Vida útil (em meses)"  /></DivInputText>
        <DivInputText><input className="inputEditar" type="text" placeholder="observações"/></DivInputText>
    </div>
    </form>
    <div className="cancelarAdicionarBem">
      <Button id="buttonAdicionarBem"
         handleClick={fCodigoBarras}
         nome="Adicionar"
     />
            <a onClick={handleClick}>
              Cancelar
            </a>
            </div>
          
        
      </DivCadastro>
    </EnvolveModal>}
    {codigoBarras && <EnvolveModal><div className="divCodigoBarras">
        <h3>Codigo de Barras</h3>
        <img src={codigoDeBarras} height="70%" width="90%"></img>
        <button onClick={() => window.print()}>Imprimir</button>
        <button onClick={handleClick}>Fechar</button>
    </div>
    </EnvolveModal>}
    </div>
    )
} 