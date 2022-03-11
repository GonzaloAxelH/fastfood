import React from "react";
import ItemFoodDefault from "./ItemFoodDefault/index";

const TYPE = {
  DEFAULT: "default",
  DRINKS: "drinks",
  COMBO: "combos",
  CLASIC: "clasic",
  SIMPLE: "simple",
};

export default function ItemFood({ type, ...props }) {
  switch (type) {
    case TYPE.DEFAULT:
      return <ItemFoodDefault {...props} />;
    default:
      return <ItemFoodDefault {...props} />;
  }
}
