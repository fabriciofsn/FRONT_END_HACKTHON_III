import React from "react";
import styled from "styled-components";

const DivTextArea = styled.div`
  width: 100%;
  max-width: 350px;
  height: 120px;
  border-radius: 40px;
  background-color: #d9d9d9;
  textarea {
    background-color: transparent;
    color: black;
    border: none;
    resize: none;
    width: 100%;
    padding: 1rem;
    font-size: 1.3rem;
    outline: none;
  }
`;

const Textarea = () => {
  return (
    <DivTextArea>
      <textarea placeholder="Observações"></textarea>
    </DivTextArea>
  );
};

export default Textarea;
