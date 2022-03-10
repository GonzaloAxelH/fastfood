import React from "react";
import styled from "styled-components";
import ArrowDown from "../../Atoms/Icons/ArrowDown";

import DropdownCategory from "./DropdownCategory";
import { useRouter } from "next/router";
const WrapperItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 4em;
  .wrapper {
    cursor: pointer;
    padding: 0 10px;
    display: flex;
    align-items: center;
  }
  &:hover {
    .label {
      opacity: 1;
    }
  }
  span {
    cursor: pointer;
    font-family: "Rubik 500";
    color: #61443e;
    font-size: 15px;
  }
  .icon1 {
    margin-right: 6px;
    svg {
      width: 2em;
      height: 3em;

      opacity: 0.8;
    }
  }
  .icon2 {
    margin-left: 3px;
    svg {
      width: 12px;
      height: 12px;
      fill: #000;
    }
  }
  .label {
    opacity: 1;
  }
`;

export default function ItemCategoryNav({ children, label, Icon, path }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <WrapperItem
      onClick={() => {
        router.push(path);
      }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="wrapper">
        <span className="icon1">
          <Icon />
        </span>
        <span className="label">{label}</span>
        <span className="icon2">{children && <ArrowDown />}</span>
      </div>
      {children && (
        <DropdownCategory isOpen={isOpen} style="ease-in">
          {children}
        </DropdownCategory>
      )}
    </WrapperItem>
  );
}
