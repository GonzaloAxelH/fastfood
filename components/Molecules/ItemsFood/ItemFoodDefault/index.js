import React from "react";
import styled from "styled-components";
import Image from "next/image";

const WrapperItemFood = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
`;
const Slogan = styled.p`
  text-transform: uppercase;
  font-size: 1rem;
  font-family: "Rubik 700";
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  img {
    border-radius: 5px;
    opacity: 1;
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }
  &:hover img {
    opacity: 0.7;
  }
`;
export default function ItemFoodDefault(props) {
  const { img, title } = props;
  return (
    <WrapperItemFood>
      <ImageWrapper>
        <Image
          src={`/images/Food/${img}`}
          layout="fill"
          objectFit="cover"
          alt={img.split(".")[0]}
          blurDataURL={`/images/Food/${img}`}
        />
      </ImageWrapper>

      <Slogan>{title}</Slogan>
    </WrapperItemFood>
  );
}
