import styled from "styled-components";

export const GlobalDiv = styled.div`
  background-color: #d9d9d9;
  height: 100vh;
`;

export const HeaderContent = styled.header`
  background-color: #061226;
  padding: 1rem;
  width: 100%;
  height: 150px;
  border-bottom-right-radius: 40px;
  display: flex;
`;

export const DivAlignCenter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  width: 100%;
  max-width: 320px;

  input {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1rem;
    width: 130px;
    color: #d9d9d9;
  }
  input::placeholder {
    color: white;
    font-size: 1.2rem;
    color: #d9d9d9;
    opacity: 0.5;
  }
`;

export const DivInputSearch = styled.div`
  border: 2px solid #d9d9d9;
  border-radius: 18px;
  width: 100%;
  height: 50px;
  max-width: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const DivModal = styled.div`
  position: absolute;
  background-color: #0a1d3e;
  top: 70px;
  padding: 0.5rem;
  border-radius: 8px;
  width: 100%;
  z-index: 99;
  display: none;

  &:before {
    content: "";
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 30px solid #0a1d3e;
    position: relative;
    left: -6px;
    top: -55px;
  }
  ul {
    list-style: none;
    width: 100%;
  }
  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: #d9d9d9;
  }
`;

export const DivTipos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  width: 100%;
  font-size: 1.3rem;

  p {
    color: #0a1d3e;
    border: 2px solid #0a1d3e;
    padding: 3px 5px;
    width: 170px;
    height: 37px;
    margin: 0 5px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;

    &.selected {
      background-color: #0a1d3e;
      color: #d9d9d9;
    }
  }
`;

export const DivFooter = styled.div`
  background-color: #0a1d3e;
  width: 100%;
  height: 100px;
  padding: 1.2rem;
  border-top-left-radius: 2em;
  position: absolute;
  bottom: 0;

  button {
    background-color: #d9d9d9;
    color: #0a1d3e;
    border-radius: 25px;
    font-size: 1.2rem;
    height: 3em;
    width: 9em;
    font-weight: bold;
    display: block;
    cursor: pointer;
    border: none;
  }
`;
