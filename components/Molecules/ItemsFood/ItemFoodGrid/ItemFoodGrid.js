import React, { useContext } from "react";
import styled from "styled-components";
import ButtonOrder from "../../../Atoms/Buttons/Button";
import { BiHeart } from "react-icons/bi";
import { useState } from "react";
import { BallBeat } from "react-pure-loaders";
import Image from "next/image";
import { FullContext } from "../../../../pages/_app";

import Link from "next/link";
const ItemFoodWrapper = styled.div`
  padding: 20px;
  justify-self: center;
  display: flex;
  background-size: contain;
  flex-direction: column;

  .btn-order {
    margin: auto;
  }
  .css-2adxt7-BallBeat {
    transform: scale(0.7);
    margin-top: -2px;
  }
`;
const FoodInfo = styled.div`
  padding: 0px 20px 15px;
  text-align: center;
  p:nth-child(1) {
    font-family: "Rubik 500";
    font-size: 17px;
    color: #333;
    margin-bottom: 6px;
  }
  p:nth-child(2) {
    font-family: "Rubik 400";
    font-size: 14px;
    color: #888888;
    line-height: 1.625em;
  }
  a {
    text-decoration: none;
  }
`;

const ImageWrapper = styled.div`
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  position: relative;

  overflow: hidden;

  img {
    object-fit: contain;
  }
`;
const PriceHold = styled.div`
  color: #ffffff;
  background-color: #4d2c21;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  span {
    font-size: 14px;
    cursor: default;
    font-family: "Rubik 700";
  }

  span:before {
    content: "$";
    font-size: 12px;
    margin-right: 1px;
  }
  left: 1em;
  top: 1em;
  padding: 7px;
  border-radius: 4px;
`;
const BtnFavorite = styled.div`
  position: absolute;
  cursor: pointer;
  bottom: 0em;
  padding: 1em;
  right: 0em;
  z-index: 2;
  .go4268192979 {
    width: 50px;
    height: 50px;
  }
  svg {
    width: 23px;
    height: 23px;
    fill: #333;
  }
`;

export default function ItemFoodGrid(props) {
  const { setOpenCart } = React.useContext(FullContext);

  const [load, setLoad] = useState(false);
  const { name, price, imageLocal, description } = props.burger;
  const getNumberPrice = (price) => price.split(".")[0].split("$");
  const getDecimalPrice = (price) => price.split(".")[1];

  return (
    <ItemFoodWrapper>
      <ImageWrapper>
        <PriceHold>
          <span>
            {getNumberPrice(price)}
            <sup>.{getDecimalPrice(price)}</sup>
          </span>
        </PriceHold>
        <BtnFavorite>
          <BiHeart />
        </BtnFavorite>
        <Link href={`/fastfood/product/${name}`}>
          <a>
            <Image
              src={`/images/Food/${imageLocal}`}
              alt={name}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </a>
        </Link>
      </ImageWrapper>

      <FoodInfo>
        <Link href={`/fastfood/product/${name}`}>
          <a>
            <p>{name}</p>
          </a>
        </Link>
        <p>{description}</p>
      </FoodInfo>
      <div className="btn-order">
        <ButtonOrder
          type="order"
          onClick={async () => {
            setLoad(true);
            setTimeout(() => {
              setOpenCart(true);
              setLoad(false);
            }, 1000);

            setTimeout(() => {
              setOpenCart(false);
            }, 5000);
          }}
        >
          <span style={{ display: load ? "none" : "block" }}>Order Now</span>

          {load && <BallBeat color="#ffca3c" loading />}
        </ButtonOrder>
      </div>
    </ItemFoodWrapper>
  );
}
