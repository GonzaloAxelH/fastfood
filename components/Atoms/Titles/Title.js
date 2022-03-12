import React from "react";
import styled from "styled-components";
const TI = styled.div`
  font-family: "Rubik 700";
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
`;
export default function Title({ size, bold, color, children, ...props }) {
  return (
    <TI
      color={color ? color : "#000"}
      fontSize={size ? size : "1rem"}
      boldNumber={bold ? bold : "500"}
      {...props}
    >
      {children}
    </TI>
  );
}
