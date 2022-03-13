import React from "react";
import styled from "styled-components";
import ItemFoodGrid from "../../Molecules/ItemsFood/ItemFoodGrid/ItemFoodGrid";
const tempBurgers = [
  {
    price: "$10.00",
    name: "Bacon Chesseburger",
    description:
      "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.fries",
    imageLocal: "bacon-chesseburger.jpg",
    isfavorite: false,
    stars: 5,
  },
  {
    price: "$1.99",
    name: "Jalapeno Angus Burger",
    description:
      "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.fries",
    imageLocal: "jalapeno-angus-burger.jpg",
    isfavorite: false,
    stars: 5,
  },
  {
    price: "$32.10",
    name: "Bacon Chesseburger",
    description:
      "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.fries",
    imageLocal: "bacon-chesseburger.jpg",
    isfavorite: false,
    stars: 5,
  },
  {
    price: "$10.00",
    name: "Bacon Chesseburger",
    description:
      "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.fries",
    imageLocal: "bacon-chesseburger.jpg",
    isfavorite: false,
    stars: 5,
  },
  {
    price: "$1.99",
    name: "Jalapeno Angus Burger",
    description:
      "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.fries",
    imageLocal: "jalapeno-angus-burger.jpg",
    isfavorite: false,
    stars: 5,
  },
  {
    price: "$32.10",
    name: "Bacon Chesseburger",
    description:
      "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.fries",
    imageLocal: "bacon-chesseburger.jpg",
    isfavorite: false,
    stars: 5,
  },
  {
    price: "$1.00",
    name: "Jalapeno Angus Burger",
    description:
      "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.fries",
    imageLocal: "jalapeno-angus-burger.jpg",
    isfavorite: false,
    stars: 5,
  },
  {
    price: "$1.00",
    name: "Jalapeno Angus Burger",
    description:
      "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.fries",
    imageLocal: "jalapeno-angus-burger.jpg",
    isfavorite: false,
    stars: 5,
  },
];

const ListGridBurgersStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  width: 100%;
  padding: 3em 0;
`;
export default function ListGridBurgers() {
  const [burgers, setBurgers] = React.useState(tempBurgers);
  return (
    <ListGridBurgersStyled>
      {burgers.map((burger, index) => {
        return <ItemFoodGrid key={index} burger={burger} />;
      })}
    </ListGridBurgersStyled>
  );
}
