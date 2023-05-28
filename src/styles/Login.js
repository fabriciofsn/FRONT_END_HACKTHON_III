import styled from "styled-components";

export const DivElement = styled.div`
  background-color: #061226;
  width: 100%;
  height: 190px;
  border-bottom-right-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 320px;
  }
`;

export const DivWrapper = styled.div`
  label {
    display: block;
    font-size: 1.3rem;
    text-align: left;
    margin: 5px 0;
    color: #004964;
  }
  input {
    background-color: transparent;
    border: none;
    margin-bottom: 5px;
    width: 100%;
    outline: none;
  }
`;

export const DivAlignCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  height: calc(100% - 190px);

  form {
    width: 100%;
    max-width: 350px;
    a {
      margin: 5px 0;
      font-size: 1.3rem;
      color: #004964;
    }
  }
`;

export const DivStyleInput = styled.div`
  border-bottom: 1px solid #004964;

  input {
    font-size: 1.3rem;
  }
`;

export const ButtonStyled = styled.button`
  background-color: #061226;
  color: #d9d9d9;
  cursor: pointer;
  display: block;
  width: 300px;
  height: 70px;
  font-size: 1.7rem;
  border: none;
  border-radius: 40px;
`;

export const DivAlignButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0;
`;

export const DivLinkHref = styled.div`
  margin: 20px 0;
`;
