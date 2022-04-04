import React, { useEffect } from "react";
import styled from "styled-components";
import ItemFoodGrid from "../../Molecules/ItemsFood/ItemFoodGrid/ItemFoodGrid";
import { connect } from "react-redux";
const ListGridBurgersStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  width: 100%;
  padding: 3em 0;
`;

function ListGridBurgers({ products }) {
  const [burgers, setBurgers] = React.useState([]);
  useEffect(() => {
    setBurgers(products);
  }, [products]);
  return (
    <ListGridBurgersStyled>
      {burgers.map((burger, index) => {
        return <ItemFoodGrid key={index} burger={burger} />;
      })}
    </ListGridBurgersStyled>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products.allProducts,
  };
};

export default connect(mapStateToProps, null)(ListGridBurgers);
