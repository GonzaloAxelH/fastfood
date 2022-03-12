import React, { useState, useEffect } from "react";
import ItemCategoryNav from "../../Molecules/ItemCategoryNav/";
import styled from "styled-components";
import BurguerIcon from "../../Atoms/Icons/CategoryIcons/BurguerIcon";
import PizzaContent from "../ContentsCategoryList/Pizza/index";
import BurguerContent from "../ContentsCategoryList/Burguers/index";
import SandwichesContent from "../ContentsCategoryList/Sandwiches/index";
import DrinkContent from "../ContentsCategoryList/Drinks/index";
import CombosContent from "../ContentsCategoryList/Combos/index";

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

  max-height: ${(props) => (props.offset == 0 ? "4em" : "0")};

  overflow: ${(props) => (props.offset == 0 ? "visible" : "hidden")};
  transition: 0.2s all;
`;

export default function NavCategory({ scrollOffset }) {
  return (
    <NavCategoryContainer offset={scrollOffset}>
      <ItemCategoryNav
        label="PIZZA"
        Icon={() => <BurguerIcon />}
        path="/product-category/pizza"
        left="-10vw"
      >
        <PizzaContent />
      </ItemCategoryNav>
      <ItemCategoryNav
        label="BURGUERS"
        Icon={BurguerIcon}
        path="/product-category/pizza"
        left="-15vw"
      >
        <BurguerContent />
      </ItemCategoryNav>
      <ItemCategoryNav
        label="SANDWICHES"
        typeEffect="opacity-effect"
        Icon={BurguerIcon}
        path="/product-category/pizza"
        left="0em"
      >
        <SandwichesContent />
      </ItemCategoryNav>
      <ItemCategoryNav
        label="SIDES & SALADS"
        Icon={BurguerIcon}
        path="/product-category/pizza"
      />
      <ItemCategoryNav
        label="COMBOS"
        Icon={BurguerIcon}
        path="/product-category/combos"
        left="-23vw"
      >
        <CombosContent />
      </ItemCategoryNav>
      <ItemCategoryNav
        label="DRINKS"
        Icon={BurguerIcon}
        path="/product-category/pizza"
        left="-17vw"
      >
        <DrinkContent />
      </ItemCategoryNav>
      <ItemCategoryNav
        label="DESSERTS"
        Icon={BurguerIcon}
        path="/product-category/pizza"
      ></ItemCategoryNav>
    </NavCategoryContainer>
  );
}
