import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { SingleTheme as theme } from "../../../styles/theme/Variables";
import Carousel, { consts } from "react-elastic-carousel";
const WrapperListSlide = styled(Carousel)`
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  background-color: #fff;
  padding: 3em 0;
  width: 100%;

  &:active {
    cursor: -webkit-grab; /* Chrome 1-21, Safari 4+ */
  }
  .rec.rec-arrow {
    position: absolute;
    z-index: 2;
    outline: none;
    background-color: #fff;
    transform: scale(0.8);
  }
  .rec.rec-arrow-left {
    left: 0.5em;
  }

  .rec.rec-arrow-right {
    right: 0.5em;
  }

  .rec-pagination {
    display: none;
  }

  .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
  }
  .rec-item-wrapper {
    display: flex;
    justify-content: center;
  }
  a {
    text-decoration: none;
    font-size: 13px;
    text-transform: uppercase;
    font-family: "Rubik 700";
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
`;
const CategoryImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 155px;
  height: 175px;

  border-radius: 6px;
  transition: all 0.4s ease 0s;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    width: 300px;
    height: 320px;
  }
  @media (max-width: ${(props) => props.theme.screens.tablet}) {
  }
  @media (max-width: ${(props) => props.theme.screens.tabletL}) {
    width: 350px;
    height: 370px;
  }
  @media (max-width: ${(props) => props.theme.screens.desktop}) {
  }
  @media (max-width: ${(props) => props.theme.screens.desktopL}) {
    width: 255px;
    height: 275px;
  }

  img {
    object-fit: cover;
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
`;
export default function ListCategorySlide() {
  const getNumberScreen = (screen) => screen.split("").slice(0, -2).join("");

  const breakPoints = [
    { width: getNumberScreen(theme.screens.mobile), itemsToShow: 1 },
    {
      width: getNumberScreen(theme.screens.tablet),
      itemsToShow: 2,
    },
    { width: getNumberScreen(theme.screens.tabletL), itemsToShow: 3 },
    {
      width: getNumberScreen(theme.screens.desktop),
      itemsToShow: 4,
    },
    { width: getNumberScreen(theme.screens.desktopL), itemsToShow: 5 },

    { width: getNumberScreen(theme.screens.descktopXL), itemsToShow: 6 },
  ];
  return (
    <WrapperListSlide breakPoints={breakPoints}>
      <Link href="/">
        <a>
          <CategoryImage>
            <Image
              src="/images/Food/cat-burger1.jpg"
              layout="fill"
              alt="cat-burguer1"
            />
          </CategoryImage>
          <p>BURGERS</p>
        </a>
      </Link>
      <Link href="/">
        <a>
          <CategoryImage>
            <Image
              src="/images/Food/cat-dessert1.jpg"
              layout="fill"
              alt="cat-burguer1"
            />
          </CategoryImage>
          <p>PIZZA</p>
        </a>
      </Link>
      <Link href="/">
        <a>
          <CategoryImage>
            <Image
              src="/images/Food/cat-drinks1.jpg"
              layout="fill"
              alt="cat-burguer1"
            />
          </CategoryImage>
          <p>SANDWICHES</p>
        </a>
      </Link>
      <Link href="/">
        <a>
          <CategoryImage>
            <Image
              src="/images/Food/cat-pizza1.jpg"
              layout="fill"
              alt="cat-burguer1"
            />
          </CategoryImage>
          <p>SIDES</p>
        </a>
      </Link>
      <Link href="/">
        <a>
          <CategoryImage>
            <Image
              src="/images/Food/cat-sandwiches1.jpg"
              layout="fill"
              alt="cat-burguer1"
            />
          </CategoryImage>
          <p>DESSERTS</p>
        </a>
      </Link>
      <Link href="/">
        <a>
          <CategoryImage>
            <Image
              src="/images/Food/cat-sides1.jpg"
              layout="fill"
              alt="cat-burguer1"
            />
          </CategoryImage>
          <p>DRINKS</p>
        </a>
      </Link>
    </WrapperListSlide>
  );
}
