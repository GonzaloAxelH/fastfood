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
  left: ${(props) => props.left};
  transition: 0.25s all ease-in-out;
  box-shadow: 0 0 40px rgb(0 0 0 / 20%);
  -moz-box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 0 40px 0 rgb(0 0 0 / 20%);
  border-radius: 4px;
  z-index: 1;
`;

const WrapperDropdownCategoryOpacity = styled.div`
  position: absolute;
  background-color: #fff;
  cursor: default;
  top: 0;
  margin-top: 3.75em;
  left: ${(props) => props.left};
  overflow: hidden;
  transition: opacity 0.5s ease-in-out;
  box-shadow: 0 0 40px rgb(0 0 0 / 20%);
  -moz-box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 0 40px 0 rgb(0 0 0 / 20%);
  height: ${(props) => (props.isOpen ? "auto" : "0")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  border-radius: 4px;
  z-index: 1;
`;

export default function DropdownCategory({
  children,
  isOpen,
  left,
  typeEffect,
}) {
  return (
    <>
      {typeEffect === "opacity-effect" ? (
        <WrapperDropdownCategoryOpacity left={left} isOpen={isOpen}>
          {children}
        </WrapperDropdownCategoryOpacity>
      ) : (
        <WrapperDropdownCategory left={left} isOpen={isOpen}>
          {children}
        </WrapperDropdownCategory>
      )}
    </>
  );
}
