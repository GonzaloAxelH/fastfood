import React from "react";
import styled from "styled-components";
const TI = styled.h2`
  font-size: 44px;
  font-family: "Rubik 700";
  color: #22272d;
  line-height: 1.3em;
  text-align: center;
  margin: 0;
`;
export default function BigTitle({ children }) {
  return <TI>{children}</TI>;
}
