import React from "react";
import styled, { keyframes } from "styled-components";
import { GrClose } from "react-icons/gr";
import { useRef } from "react";

const anim = keyframes`
  from{
    opacity: 0;
    height: 0;
  }
  to{
    opacity: 1;
    height: 80vh;
  }
`;

const DivEsqueceu = styled.div`
  height: 80vh;
  width: 100%;
  position: absolute;
  bottom: 15px;
  left: 0;
  padding: 1%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  animation: ${anim} 0.3s forwards;
  overflow: hidden;
  .input {
    width: 100%;
    border-radius: 5px;
    background-color: white;
    border-radius: 10px;
    input {
      background-color: transparent;
      border: none;
      outline: none;
      font-size: 1.3rem;
      padding: 0.5rem;
      width: 100%;
    }
  }
  .btn {
    text-align: center;
  }
  button {
    border-radius: 10px;
    width: 220px;
    height: 40px;
    cursor: pointer;
    background-color: #eb7b0a;
    border: none;
    color: #d9d9d9;
    margin: 10px 0;
    font-size: 1.3rem;
  }

  .title {
    margin: 10px 0;
    color: #eb7b0a;
    text-align: center;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`;

const EsqueceuSenha = (props) => {
  const inputRef = useRef();
  function handleSendEmail(e) {
    if (inputRef.current.value !== "") {
      e.preventDefault();
      alert("Siga o passo a passo enviado para seu email.");
      props.setFalse(false);
    }
  }

  return (
    <form style={{ width: "100%" }}>
      <DivEsqueceu>
        <div className="widthDiv">
          <div className="close">
            <GrClose size={30} onClick={() => props.close(false)} />
          </div>
          <div className="title">
            <h1>Digite seu email para recuperar seu cadastro.</h1>
          </div>

          <div className="input">
            <input
              ref={inputRef}
              type="text"
              required
              placeholder="Digite seu email"
            />
          </div>
          <div className="btn">
            <button onClick={handleSendEmail}>Enviar</button>
          </div>
        </div>
      </DivEsqueceu>
    </form>
  );
};

export default EsqueceuSenha;
