import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Title from "../../Atoms/Titles/Title";
import P from "../../Atoms/Parrafos/P";
import ServingSize from "../../Molecules/ServingSize/ServingSize";
import NutritionSummary from "../../Molecules/NutritionSummary/NutritionSummary";
import FormOrderProduct from "../../Organims/FormOrderProduct/FormOrderProduct";
let product = {
  idProduct: "4905u4f38945g3g903g",
  name: "Puscan Pizza",
  imageUrl: "/images/Food/puscan-pizza.jpg",
  description:
    "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.",
};
const WrapperProductPresent = styled.div`
  display: flex;
  width: 100%;
`;
const ImageWrapper = styled.div``;
const InfoFeacturesProduct = styled.div``;
const ImagesProductPreview = styled.div``;
const FormularioOrderCart = styled.div``;
export default function ProductPresent() {
  return (
    <WrapperProductPresent>
      <ImagesProductPreview>
        <ImageWrapper>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={700}
            height={700}
            layout="intrinsic"
            objectFit="contain"
          />
        </ImageWrapper>
      </ImagesProductPreview>
      <InfoFeacturesProduct>
        <Title size="2.2em" bold color="#22272d">
          {product.name}
        </Title>
        <P size="15px" color="#666666">
          {product.description}
        </P>
        <ServingSize />
        <NutritionSummary />
        <FormOrderProduct />
      </InfoFeacturesProduct>
    </WrapperProductPresent>
  );
}
