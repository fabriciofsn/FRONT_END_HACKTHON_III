import styled, { keyframes } from "styled-components";

const anim = keyframes`
  from{
    transform: translate3d(-300px,0,0);

  }
  to{
    transform: translate3d(0,0,0);
    transition: .3s;
  }
`;

export const DivModal = styled.div`
  background-color: #061226;
  width: 100%;
  height: calc(100vh - 90px);
  z-index: 1000;
  position: absolute;
  top: 5.5em;
  left: 0;
  transition: 0.3s;
  padding: 1rem;
  border-radius: 5px;
  animation: ${anim} 0.3s forwards;

  ul {
    list-style: none;
  }
  li {
    width: 100%;
    margin: 3em 0;
    border-bottom: 1px solid #d9d9d9;
  }
  a {
    font-size: 1.5rem;
    color: #d9d9d9;
    text-decoration: none;
  }
`;
