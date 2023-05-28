import styled from "styled-components";

export const DivModal = styled.div`
  background-color: #004964;
  width: 100%;
  max-width: 300px;
  height: 80vh;
  position: absolute;
  top: 5.5em;
  left: 0;
  transition: 0.3s;
  padding: 1rem;
  border-radius: 5px;

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
