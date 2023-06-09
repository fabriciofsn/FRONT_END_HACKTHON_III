import styled from "styled-components";

export const DivOverFlow = styled.div`
  width: 100%;
  height: 55vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  label {
    font-weight: bold;
    font-size: 1.2rem;
  }

  label.selected {
    border-bottom: 2px solid #006;
    font-weight: bold;
  }

  input[type="radio"] {
    visibility: hidden;
  }
`;

export const DivFlex = styled.div`
  width: 100%;
  max-width: 350px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  label {
    margin-top: -15px;
  }
  span {
    font-size: 1.3rem;
    display: flex;
    margin-top: 5px;
    font-weight: bold;
  }

  button {
    margin-top: 50px;
  }

  #bens {
    margin-top: 25px;
  }
`;

export const DivFlexContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivSpan = styled.div`
  margin-top: 20px;
  span {
    font-size: 1.3rem;
    margin-top: 5px;
  }

  input {
    margin: 0 15px;
  }
`;
