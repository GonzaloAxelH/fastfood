import React from "react";
import styled from "styled-components";
import BigP from "../../Atoms/Parrafos/BigP";
import BigTitle from "../../Atoms/Titles/BigTitle";
import ListGridBurgers from "./ListGridBurgers";
const WrapperGrilled = styled.div`
  padding: 80px 50px;
  h2 {
    margin: 0.5em 0;
  }
  .parrafo-w {
    text-align: center;
    margin: 0 auto;
    max-width: 800px;
  }
`;
export default function GrilledBurgers() {
  return (
    <WrapperGrilled>
      <BigTitle>CHAR-GRILLED BURGERS</BigTitle>
      <div className="parrafo-w">
        <BigP>
          Hand-crafted fresh to order. Smashed to lock in flavor on a toasted
          brioche bun.
        </BigP>
        <BigP>Served with garlic dill pickles & fries.</BigP>
      </div>

      <ListGridBurgers />
    </WrapperGrilled>
  );
}
