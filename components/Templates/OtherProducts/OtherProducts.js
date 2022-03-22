import React from "react";
import ItemFoodSimple from "../../Molecules/ItemsFood/ItemFoodSimple/ItemFoodSimple";
import styled from "styled-components";
import Title from "../../Atoms/Titles/Title";
import BigTitle from "../../Atoms/Titles/BigTitle";
const tempproducts = [
  {
    price: "$10.00",
    name: "Bacon Chesseburger",
    description:
      "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.fries",
    imageLocal: "drinks2.jpg",
    isfavorite: false,
    stars: 2,
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
    stars: 3,
  },
  {
    price: "$10.00",
    name: "Bacon Chesseburger",
    description:
      "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.fries",
    imageLocal: "drinks2.jpg",
    isfavorite: false,
    stars: 3,
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
];
const OtherProductsWrapper = styled.div`
  display: flex;
  h2 {
    font-size: 30px;
    text-align: center;
    margin: 0 1em;
  }
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const List = styled.div`
  display: grid;
  width: 80vw;
  padding: 3em 0;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  justify-content: center;
  @media (max-width: ${(props) => props.theme.screens.tabletXL}) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    width: 95vw;
  }
`;
export default function OtherProducts() {
  return (
    <OtherProductsWrapper>
      <BigTitle>Other Burgers Youll Love</BigTitle>
      <List>
        {tempproducts.map((product, index) => {
          return <ItemFoodSimple product={product} key={index} />;
        })}
      </List>
    </OtherProductsWrapper>
  );
}
