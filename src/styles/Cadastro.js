import styled, { keyframes } from "styled-components";

const anim = keyframes`
  from{
    height: 0;
    opacity: 0;
  }
  to{
    height: auto;
    height: auto;
    opacity: 1;
  }
`;

export const DivCadastro = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 0;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  background-color: #ffff;
  z-index: 999;
  justify-content: center;
  align-items: center;
  animation: ${anim} 0.3s forwards;

  form {
    width: 100%;
    margin-top: 20px;

    div {
      width: 100%;
      margin: 10px auto;
      text-align: center;
    }
  }

  input {
    font-size: 1.2rem;
    width: 100%;
    max-width: 320px;
    margin: auto;
  }

  input[type="file"] {
    position: absolute;
    top: 35px;
    display: block;
    background-color: transparent;
    border: none;
    opacity: 0;
  }

  a {
    font-size: 1.3rem;
    color: #061226;
  }
`;

export const DivA = styled.div`
  height: 20px;
  a {
    font-weight: bold;
  }
`;

export const DivInputFile = styled.div`
  position: absolute;
  top: -60px;
  text-align: center;
  margin: auto;
  background-color: #d9d9d9;
  border-radius: 50%;
  width: 100%;
  max-width: 100px;
  height: 100px;
`;

export const DivAdjustFile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;

  img {
    border-radius: 100%;
  }
`;

export const DivAccordion = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  margin: auto;
  position: absolute;
  bottom: 0;
  font-size: 1.3rem;
  font-weight: bold;

  span {
    opacity: 0.3;
    position: relative;
    bottom: 0;
    outline: none;
  }
  span.selected_ {
    opacity: 1;
    border-bottom: 3px solid #061226;
  }
`;

export const Select = styled.select`
  background-color: #d9d9d9;
  font-size: 1.3rem;
  border: none;
  width: 100%;
  max-width: 320px;
  margin: auto;
  outline: none;

  option {
    font-size: 1rem;
  }
`;
