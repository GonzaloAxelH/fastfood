import React from "react";
import styled from "styled-components";
const TI = styled.div`
  font-family: "Rubik 700";
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};

  @media (max-width: ${(props) => props.theme.screens.desktop}) {
    font-size: calc(${(props) => props.fontSize} - 8px);
  }
  @media (max-width: ${(props) => props.theme.screens.tabletL}) {
    font-size: calc(${(props) => props.fontSize} - 15px);
  }
  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    font-size: calc(${(props) => props.fontSize} - 30px);
  }
  @media (max-width: ${(props) => props.theme.screens.mobileL}) {
    font-size: calc(${(props) => props.fontSize} - 40px);
  }
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
