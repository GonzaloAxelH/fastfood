import React from "react";
import ItemCategoryNav from "../../Molecules/ItemCategoryNav/";
import BurguerIcon from "../../Atoms/Icons/CategoryIcons/BurguerIcon";
import PizzaContent from "../ContentsCategoryList/Pizza/index";
import BurguerContent from "../ContentsCategoryList/Burguers/index";
import SandwichesContent from "../ContentsCategoryList/Sandwiches/index";
import DrinkContent from "../ContentsCategoryList/Drinks/index";
import CombosContent from "../ContentsCategoryList/Combos/index";
import { NavCategoryContainer } from "./NavCategoryStyles";
export default function NavCategory({ scrollOffset }) {
  return (
    <NavCategoryContainer offset={scrollOffset}>
      <ItemCategoryNav
        className="item-1"
        label="PIZZA"
        Icon={() => <BurguerIcon />}
        path="/fastfood/product-category/pizzas"
        left="-10vw"
      >
        <PizzaContent />
      </ItemCategoryNav>
      <ItemCategoryNav
        className="item-2"
        label="BURGUERS"
        Icon={BurguerIcon}
        path="/fastfood/product-category/burgers"
        left="-15vw"
      >
        <BurguerContent />
      </ItemCategoryNav>
      <ItemCategoryNav
        className="item-3"
        label="SANDWICHES"
        typeEffect="opacity-effect"
        Icon={BurguerIcon}
        path="/fastfood/product-category/sandwiches"
        left="0em"
      >
        <SandwichesContent />
      </ItemCategoryNav>
      <ItemCategoryNav
        className="item-4"
        label="SIDES & SALADS"
        Icon={BurguerIcon}
        path="/fastfood/product-category/sides-salads"
      />
      <ItemCategoryNav
        className="item-5"
        label="COMBOS"
        Icon={BurguerIcon}
        path="/fastfood/product-category/combos"
        left="-23vw"
      >
        <CombosContent />
      </ItemCategoryNav>
      <ItemCategoryNav
        className="item-6"
        label="DRINKS"
        Icon={BurguerIcon}
        path="/fastfood/product-category/drinks"
        left="-17vw"
      >
        <DrinkContent />
      </ItemCategoryNav>
      <ItemCategoryNav
        className="item-7"
        label="DESSERTS"
        Icon={BurguerIcon}
        path="/fastfood/product-category/desserts"
      ></ItemCategoryNav>
    </NavCategoryContainer>
  );
}
