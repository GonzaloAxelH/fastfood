import React from "react";
import styled from "styled-components";
const Button = styled.button`
  font-family: "Rubik 500";
  color: #333;
  padding: 0.5em 1.2em;
  border: 2px solid #e8e8e8;
  text-align: center;
  background: #fff;
  border-radius: 99px;
  font-size: 12px;
  text-transform: uppercase;
  height: 30px;
  transition: 0.25s all;
  cursor: pointer;
  &:hover {
    color: #f2002d;
    border: 2px solid #333;
  }
`;
export default function ButtonOrder({ label, ...props }) {
  return <Button {...props}>{label}</Button>;
}
