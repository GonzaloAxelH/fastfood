import React from "react";
import styled from "styled-components";
const PW = styled.p`
  font-family: "Rubik 400";

  font-size: ${(props) => props.fontSize};
`;
export default function P({ size, children }) {
  return <PW fontSize={size ? size : "13px"}>{children}</PW>;
}
