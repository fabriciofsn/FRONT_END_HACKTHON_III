import styled, { keyframes } from "styled-components";

export const DivSetor = styled.div`
  position: absolute;
  z-index: 999;
  bottom: 0;
  background-color: #0a1d3e;
  width: 100%;
  height: 60vh;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  text-align: center;
  padding: 2rem 0;
  margin: auto;
  overflow: hidden;

  h1 {
    color: #d9d9d9;
  }

  input,
  select,
  option {
    background-color: transparent;
    outline: none;
    width: 100%;
    padding: 0.5rem;
    border: none;
    font-size: 1.1rem;
  }

  option {
    font-size: 0.9rem;
  }

  form {
    margin: 20px 0;
  }

  p {
    width: 100%;
    max-width: 350px;
    text-align: right;
    margin: 5px auto;
  }

  i {
    color: #d9d9d9;
    font-size: 1.2rem;
  }
`;

export const DivInputText = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  max-width: 350px;
  background-color: #d9d9d9;
  border-radius: 30px;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  margin: 10px auto;
`;

export const DivButtonCadastrar = styled.div`
  width: 100%;
  max-width: 250px;
  height: 70px;
  margin: auto;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #d9d9d9;
  background-color: #0a1d3e;

  button {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 1.2rem;
  }
`;

export const DivCancelar = styled.div`
  margin: 20px auto;
  button {
    border: none;
    background-color: transparent;
    color: #d9d9d9;
    cursor: pointer;
  }
`;
