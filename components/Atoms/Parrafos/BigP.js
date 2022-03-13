import React from "react";
import styled from "styled-components";
const PB = styled.p`
  font-size: 19px;
  color: #999999;
  font-family: "Rubik 500";
  line-height: 1.625em;
  text-align: center;
  margin: 0;
`;
export default function BigP({ children }) {
  return <PB>{children}</PB>;
}
