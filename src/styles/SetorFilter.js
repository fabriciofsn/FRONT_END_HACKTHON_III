import styled from "styled-components";

export const DivSetorFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 380px;
  margin: 1.5rem auto;
  p {
    font-size: 1.3rem;
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  span {
    font-size: 1.3rem;
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

  ul {
    list-style: none;
  }
`;
