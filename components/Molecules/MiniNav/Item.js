import React from "react";
import styled from "styled-components";
const ItemWrapper = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 50%;
  background-color: #fff;
  width: 36px;
  transition: 0.25s all;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #fcb900;
  }

  span {
    font-family: "Rubik 600";
    position: absolute;
    color: #fff;
    background-color: #333;
    top: 50%;
    margin-top: -18px;
    left: 24px;
    display: block;
    font-size: 9px !important;
    line-height: 14px !important;
    white-space: nowrap;
    height: 14px;
    min-width: 14px;
    border-radius: 2em;
    text-align: center;

    z-index: 1;
  }
  svg {
    width: 21px;
    height: 22px;
  }
`;

export default function Item({ onClick, type, path, Icon, number }) {
  return (
    <ItemWrapper onClick={onClick}>
      <Icon />
      {number && <span>{number}</span>}
    </ItemWrapper>
  );
}
