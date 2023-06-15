import styled from "styled-components";

export const GlobalDiv = styled.div`
  background-color: #d9d9d9;
  height: 100vh;
`;

export const HeaderContent = styled.header`
  background-color: #061226;
  padding: 1rem;
  width: 100%;
  border-bottom-right-radius: 40px;
  position: relative;

  @media (max-width: 684px) {
    height: 140px;
  }
`;

export const DivAlignCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px auto;
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
  margin: 10px auto;
  width: 100%;
  font-size: 1.3rem;
  overflow-y: auto;
  input[type="radio"] {
    visibility: hidden;
  }
  .wrapper .filtros {
    display: flex;
    align-items: center;
    overflow: auto;
    width: 100%;

    input[type="radio"] {
      visibility: hidden;
    }
  }

  .setor {
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      width: 100%;
      max-width: 150px;
      text-align: left;
    }
    span {
      font-weight: normal;
      text-align: left;
    }
  }

  .filters {
    display: flex;
  }

  label,
  label.setor {
    color: #0a1d3e;
    border: 2px solid #0a1d3e;
    padding: 3px 5px;
    width: 190px;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;

    input[type="radio"] {
      visibility: hidden;
    }

    &.selected {
      background-color: #0a1d3e;
      color: #d9d9d9;
    }
  }

  span.setor {
    display: flex;
    justify-content: center;
  }

  span {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

export const DivFooter = styled.div`
  background-color: #0a1d3e;
  width: 100%;
  height: 100px;
  padding: 1.2rem;
  border-top-left-radius: 2em;
  position: fixed;
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

export const DivFilter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  right: 35px;
  max-width: 320px;
  position: absolute;
  bottom: 2px;
  margin: 0 auto;

  p {
    font-size: 1.5rem;
    color: #d9d9d9;
  }
  p.selected {
    /* border-bottom: 3px solid #d9d9d9; */
  }
`;

export const DivButtonDesktop = styled.div`
  widht: 100vw;
  justify-content: end;
  display: grid;

  button {
    background-color: #0a1d3e;
    color: #d9d9d9;
    border-radius: 25px;
    font-size: 1.2rem;
    height: 3em;
    width: 9em;
    font-weight: bold;
    display: block;
    cursor: pointer;
    border: none;
    margin: 10px;
    margin-right: 20px;
  }
`;
