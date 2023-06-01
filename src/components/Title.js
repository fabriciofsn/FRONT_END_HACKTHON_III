import React from "react";
import styled from "styled-components";

const H3 = styled.h3`
  color: #061226;
  text-transform: uppercase;
  font-weight: bold;
`;

const Title = (props) => {
  return <H3>{props.title}</H3>;
};

export default Title;
