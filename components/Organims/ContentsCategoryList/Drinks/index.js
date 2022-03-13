import React from "react";

import styled from "styled-components";
import Btn from "../../../Atoms/Buttons/Button";
import P from "../../../Atoms/Parrafos/P";
import Title from "../../../Atoms/Titles/Title";
import ItemFood from "../../../Molecules/ItemsFood/";
const Wrapper = styled.div`
  width: 45vw;
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
          title="LEGENDARY DEEP DISH"
          img="cat-drinks.jpg"
        />
      </FoodProducts>
      <Infomation>
        <Title>About Our Pizza</Title>

        <P size="13px">
          With a more “contemporary” style, our gourmet pizzas are where the
          creativity of our pizza chefs shines. Every Pizza on Lafka can be made
          with buttery flaky.
        </P>
        <Btn label="BUILD YOUR BURGUE" type="default" />
      </Infomation>
    </Wrapper>
  );
}
