import styled from "styled-components";

export const DivInput = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  max-width: 350px;
  height: 70px;
  margin: 10px 0;
  border-radius: 40px;
  display: flex;
  align-items: center;

  input,
  select {
    background-color: transparent;
    border: none;
    outline: none;
    padding: 1rem;
  }
  option,
  select {
    width: 100%;
    max-width: 330px;
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
  }
`;
