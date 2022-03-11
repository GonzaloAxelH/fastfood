import React from "react";
import styled from "styled-components";
import BurguerIcon from "../../../Atoms/Icons/CategoryIcons/BurguerIcon";
const WrapperSandwiches = styled.div`
  padding: 2em;
  width: 260px;
`;
const SandwichesType = styled.div`
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
  display: flex;
  margin: 0.3em;
  padding: 0.3em;
  align-items: center;
  span {
    margin-left: 0.5em;
  }
  svg {
    width: 1.5em;
  }
`;

export default function index() {
  return (
    <WrapperSandwiches>
      <SandwichesType>
        <BurguerIcon />
        <span>Clasic Subs</span>
      </SandwichesType>
      <SandwichesType>
        <BurguerIcon />
        <span>Clasic Subs</span>
      </SandwichesType>
      <SandwichesType>
        <BurguerIcon />
        <span>Clasic Subs</span>
      </SandwichesType>
      <SandwichesType>
        <BurguerIcon />
        <span>Clasic Subs</span>
      </SandwichesType>
    </WrapperSandwiches>
  );
}
