import React from "react";

import styled from "styled-components";
import ItemFoodGrid from "../../Molecules/ItemsFood/ItemFoodGrid/ItemFoodGrid";
const tempproducts = [
  {
    price: "$10.00",
    name: "Bacon Chesseburger",
    description:
      "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.fries",
    imageLocal: "drinks2.jpg",
    isfavorite: false,
    stars: 5,
  },
  {
    price: "$1.99",
    name: "Jalapeno Angus Burger",
    description:
      "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.fries",
    imageLocal: "side5.jpg",
    isfavorite: false,
    stars: 5,
  },
  {
    price: "$32.10",
    name: "Bacon Chesseburger",
    description:
      "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.fries",
    imageLocal: "side6.jpg",
    isfavorite: false,
    stars: 5,
  },
];
const WrapperYouMayAlsoLike = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4em 2em;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.screens.tabletXL}) {
    flex-direction: column;
    p {
      text-align: center;
    }
  }
  p {
    flex: 2;
    font-family: "Rubik 600";
    font-size: 1.4em;
  }
`;
const List = styled.div`
  flex: 7;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: space-between;
  justify-content: center;
  width: 100%;
`;

export default function YouMayAlsoLike() {
  return (
    <WrapperYouMayAlsoLike>
      <p>You may also like…</p>
      <List>
        {tempproducts.map((burger, index) => {
          return <ItemFoodGrid key={index} burger={burger} />;
        })}
      </List>
    </WrapperYouMayAlsoLike>
  );
}
