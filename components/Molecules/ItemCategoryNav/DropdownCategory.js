import React from "react";
import styled from "styled-components";
const WrapperDropdownCategory = styled.div`
  position: absolute;
  cursor: default;
  top: 0;
  margin-top: 3.75em;
  max-height: ${(props) => (props.isOpen ? "400px" : "0px")};

  overflow: hidden;
  background: #fff;

  transition: 0.18s all ease-in-out;
  box-shadow: 0 0 40px rgb(0 0 0 / 20%);
  -moz-box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 0 40px 0 rgb(0 0 0 / 20%);
  border-radius: 4px;
  z-index: 1;
`;
export default function DropdownCategory({ children, isOpen }) {
  return (
    <WrapperDropdownCategory isOpen={isOpen}>
      {children}
    </WrapperDropdownCategory>
  );
}
