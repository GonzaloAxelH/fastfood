import React from "react";
import styled from "styled-components";
import Btn from "../../../Atoms/Buttons";
import P from "../../../Atoms/Parrafos/P";
import Title from "../../../Atoms/Titles/Title";
import ItemFood from "../../../Molecules/ItemsFood/";
const Wrapper = styled.div`
  width: 85vw;
  padding: 0.5em;
  display: flex;
  padding: 2em;
`;
const FoodProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;
`;
const Infomation = styled.div`
  padding: 0 2em;
`;
export default function index() {
  return (
    <Wrapper>
      <FoodProducts>
        <ItemFood
          type="default"
          title="THE ANGUS BURGUER"
          img="menu-banner-angus.jpg"
        />
        <ItemFood
          type="default"
          title="THE PALEO BURGUER"
          img="menu-banner-paleo.jpg"
        />
        <ItemFood
          type="default"
          title="THE EGGSTER"
          img="menu-banner-egster.jpg"
        />
      </FoodProducts>
      <Infomation>
        <Title>Our Burgers</Title>
        <P>
          With a more “contemporary” style, our gourmet pizzas are where the
          creativity of our pizza chefs shines.
        </P>
        <P>
          Every Pizza on Lafka can be made with buttery flaky crust or 100%
          whole-grain crust and even vegan friendly gluten-free dough.
        </P>

        <Btn label="BUILD YOUR BURGUER" type="default" />
      </Infomation>
    </Wrapper>
  );
}
