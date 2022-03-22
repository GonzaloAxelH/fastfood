import React from "react";
import ItemFoodSimple from "../../Molecules/ItemsFood/ItemFoodSimple/ItemFoodSimple";
import styled from "styled-components";
import Title from "../../Atoms/Titles/Title";
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
  {
    price: "$32.10",
    name: "Bacon Chesseburger",
    description:
      "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.fries",
    imageLocal: "side6.jpg",
    isfavorite: false,
    stars: 4,
  },
];
const OtherProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
const List = styled.div`
  width: 70vw;
  display: grid;
  padding: 3em 0;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
`;
export default function OtherProducts() {
  return (
    <OtherProductsWrapper>
      <Title size="30px">Other Burgers Youll Love</Title>
      <List>
        {tempproducts.map((product, index) => {
          return <ItemFoodSimple product={product} key={index} />;
        })}
      </List>
    </OtherProductsWrapper>
  );
}
