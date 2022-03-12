import React from "react";
import styled from "styled-components";
const PW = styled.p`
  font-family: "Rubik 400";

  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
`;
export default function P({ size, children, color, ...props }) {
  return (
    <PW
      color={color ? color : "#000"}
      fontSize={size ? size : "13px"}
      {...props}
    >
      {children}
    </PW>
  );
}
