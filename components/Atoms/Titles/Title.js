import React from "react";
import styled from "styled-components";
const TI = styled.p`
  font-family: "Rubik 700";
  font-size: ${(props) => props.size};
`;
export default function Title({ size, bold, children }) {
  return (
    <TI fontSize={size ? size : "1rem"} boldNumber={bold ? bold : "500"}>
      {children}
    </TI>
  );
}
