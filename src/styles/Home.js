import styled, { keyframes } from "styled-components";

export const HeaderHome = styled.header`
  background-color: #0a1d3e;
  width: 100%;
  height: 45vh;
  border-bottom-right-radius: 40px;
  position: relative;

  .logout {
    width: 100%;
    text-align: right;
    padding: 0.5rem;
  }

  .accordion {
    width: 100%;
    max-width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 0;

    p {
      font-size: 1.5rem;
      margin: auto;
      color: #d9d9d9;
    }
  }
`;

export const anim = keyframes`
  from{
    opacity: 0;
    transform: translate3d(-30px,0,0);
  }
  to{
    opacity: 1;
    transform: translate3d(0,0,0);
  }
`;

export const DivBens = styled.div`
  width: 100%;
  height: 100%;
  background-color: #d9d9d9;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .categorias,
  .gerir-bens,
  .ocorrencias {
    margin: 5px 4px;
    background-color: #fff;
    width: 100%;
    max-width: 150px;
    height: 150px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${anim} 0.3s forwards;

    .icon-categoria {
      background-color: #4c75bd;
      border-radius: 15px;
      width: 100%;
      max-width: 70px;
      margin: auto;
    }
    .icon-ocorrencia {
      background-color: #00afef;
      border-radius: 15px;
      width: 100%;
      max-width: 70px;
      margin: auto;
    }

    p,
    span {
      font-size: 1.5rem;
      font-weight: bold;
      color: #4c75bd;
      margin: 10px 0;
    }

    .icon-bens {
      background-color: #7ed957;
      border-radius: 15px;
      width: 100%;
      max-width: 80px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin: auto;
    }
  }
  .gerir-bens p,
  span {
    color: #2c521c;
  }

  .ocorrencias {
    span {
      text-align: center;
    }

    .title {
      text-align: center;
      margin-top: 10px;
    }
  }
`;
