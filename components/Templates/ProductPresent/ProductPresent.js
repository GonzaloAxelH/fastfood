import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Image from "next/image";
import { connect } from "react-redux";
import P from "../../Atoms/Parrafos/P";
import ServingSize from "../../Molecules/ServingSize/ServingSize";
import NutritionSummary from "../../Molecules/NutritionSummary/NutritionSummary";
import FormOrderProduct from "../../Organims/FormProduct/FormProduct";

import FormEditProductCart from "../../Organims/FormProduct/FormEditProductCart";
import { FullContext } from "../../../pages/_app";

const WrapperProductPresent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding: 20px 80px 80px 80px;
  @media (max-width: ${(props) => props.theme.screens.tabletXL}) {
    grid-template-columns: 1fr;
    padding: 0em;
  }
`;
const ImageWrapper = styled.div``;
const InfoFeacturesProduct = styled.div`
  margin: auto;
  padding: 0 2em;
`;
const TitleProduct = styled.h2`
  margin: 0;
  font-size: 2.2em;
  color: #22272d;
  font-family: "Rubik 700";
`;
const ImagesProductPreview = styled.div`
  padding: 2em;
`;

function ProductPresent({ product, productCart }) {
  const { openSlidingEditCart, setOpenSlidingEditCart } =
    useContext(FullContext);
  return (
    <WrapperProductPresent>
      <ImagesProductPreview>
        <ImageWrapper>
          <Image
            src={`/images/Food/${product.imageLocal}`}
            alt={product.name}
            width={900}
            height={900}
            layout="intrinsic"
            objectFit="contain"
          />
        </ImageWrapper>
      </ImagesProductPreview>
      <InfoFeacturesProduct>
        <TitleProduct>{product.name}</TitleProduct>
        <P size="15px" color="#666666">
          {product.description}
        </P>
        <ServingSize />
        <NutritionSummary />
        {openSlidingEditCart && (
          <FormEditProductCart productCart={productCart} />
        )}
        {!openSlidingEditCart && <FormOrderProduct product={product} />}
      </InfoFeacturesProduct>
    </WrapperProductPresent>
  );
}

const mapStateToProps = (state) => {
  return {
    product: state.products.product,
    productCart: state.productsCart.productCart,
  };
};
export default connect(mapStateToProps)(ProductPresent);
