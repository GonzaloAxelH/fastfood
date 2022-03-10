import React from "react";
import ItemCategoryNav from "../../Molecules/ItemCategoryNav/";
import styled from "styled-components";
import BurguerIcon from "../../Atoms/Icons/CategoryIcons/BurguerIcon";
import PizzaContent from "../ContentsCategoryList/Pizza/index";
const NavCategoryContainer = styled.div`
  position: relative;
  background-color: #fcb900;
  display: flex;
  justify-content: center;
  border-radius: 8px;

  &::before {
    position: absolute;
    content: "";
    bottom: 20px;
    left: 20px;
    width: 50%;
    top: 40px;
    background: 0 0;
    -moz-box-shadow: 0 15px 13px #333333;
    box-shadow: 0 15px 13px #333333;
    -webkit-transform: rotate(-2deg);
    -moz-transform: rotate(-2deg);
    -o-transform: rotate(-2deg);
    -ms-transform: rotate(-2deg);
    transform: rotate(-2deg);
    z-index: -1;
  }
  &::after {
    position: absolute;
    content: "";
    bottom: 20px;
    width: 50%;
    right: 20px;
    top: 40px;
    background: 0 0;
    -moz-box-shadow: 0 15px 13px #333333;
    box-shadow: 0 15px 13px #333333;
    -webkit-transform: rotate(2deg);
    -moz-transform: rotate(2deg);
    -o-transform: rotate(2deg);
    -ms-transform: rotate(2deg);
    transform: rotate(2deg);
    z-index: -1;
  }
`;

const ShadowLeft = styled.div`
  position: absolute;
`;
const ShadowRight = styled.div`
  position: absolute;
`;
export default function NavCategory() {
  return (
    <NavCategoryContainer>
      <ItemCategoryNav
        label="PIZZA"
        Icon={() => <BurguerIcon />}
        path="/product-category/pizza"
      >
        <PizzaContent />
      </ItemCategoryNav>
      <ItemCategoryNav
        label="BURGUERS"
        Icon={BurguerIcon}
        path="/product-category/pizza"
      >
        <PizzaContent />
      </ItemCategoryNav>
      <ItemCategoryNav
        label="SANDWICHES"
        Icon={BurguerIcon}
        path="/product-category/pizza"
      >
        <PizzaContent />
      </ItemCategoryNav>
      <ItemCategoryNav
        label="SIDES & SALADS"
        Icon={BurguerIcon}
        path="/product-category/pizza"
      />
      <ItemCategoryNav
        label="DRINKS"
        Icon={BurguerIcon}
        path="/product-category/pizza"
      >
        <PizzaContent />
      </ItemCategoryNav>
      <ItemCategoryNav
        label="DESSERTS"
        Icon={BurguerIcon}
        path="/product-category/pizza"
      >
        <PizzaContent />
      </ItemCategoryNav>
    </NavCategoryContainer>
  );
}
