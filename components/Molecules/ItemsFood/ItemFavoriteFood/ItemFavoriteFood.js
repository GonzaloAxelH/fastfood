import React from "react";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
const ItemFoodContainer = styled.div`
  border: 1px solid #f1f1f1;
  border-radius: 6px;
  margin: 0.5em 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    flex-direction: column;
  }
  .image-wrapper {
    position: relative;
    text-decoration: none;
    width: 100px;
    height: 100px;
    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      width: 250px;
      height: 250px;
    }
  }
  .info {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      flex-direction: column;
    }
  }
  .name {
    font-family: "Rubik 500";
    text-decoration: none;
    margin: 1em 0;
    text-align: center;
    color: #222;
    font-size: 14px;
  }
  p {
    font-family: "Rubik 500";
    font-size: 13px;
    span::before {
      content: "$";
      font-size: 12px;
    }
  }
`;

function ItemFavoriteFood({ item }) {
  const { id, product } = item;
  const { img, price, name, idProduct } = product;

  return (
    <ItemFoodContainer>
      <Link href={`/fastfood/product/${name}`}>
        <a className="image-wrapper">
          <Image src={img} alt={name} objectFit="contain" layout="fill" />
        </a>
      </Link>
      <div className="info">
        <p>
          <span>
            {price} <sup>.00</sup>
          </span>
        </p>
        <Link href={`/fastfood/product/${name}`}>
          <a className="name">{name}</a>
        </Link>
      </div>
    </ItemFoodContainer>
  );
}

export default ItemFavoriteFood;
