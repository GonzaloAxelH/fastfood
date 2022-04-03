import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SingleTheme as theme } from "../../../styles/theme/Variables";
import { WrapperListSlide, CategoryImage } from "./ListCategorySlideStyles";
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
      <Link href="/fastfood">
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
      <Link href="/fastfood">
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
      <Link href="/fastfood">
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
      <Link href="/fastfood">
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
      <Link href="/fastfood">
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
      <Link href="/fastfood">
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
