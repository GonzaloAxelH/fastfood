import React from "react";
import Image from "next/image";
import Title from "../../Atoms/Titles/Title";
import P from "../../Atoms/Parrafos/P";
import Button from "../../Atoms/Buttons/Button";
import {
  BannerSlideWrapper,
  InfoBanner,
  ImageBanner,
  ContentBanner,
} from "./BannerSlideStyles.jsx";
export default function BannerSlide() {
  return (
    <BannerSlideWrapper
      className="slide"
      itemsToScroll={1}
      itemsToShow={1}
      enableAutoPlay
      autoPlaySpeed={5000}
    >
      <ContentBanner img="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/yellow-lafka-hero-back.jpg?id=5617">
        <InfoBanner>
          <Title size="58px" color="#fff">{`SAVIN' CRAVIN'`}</Title>
          <Title size="68px" color="#fff">
            COMBO MEALS
          </Title>
          <P size="19px" color="#fff">
            Get a Meal and SAVE up to 30% on Sides & Drinks
          </P>
          <Button type="default" label="TRY COMBO PRODUCTS" />
        </InfoBanner>
        <ImageBanner>
          <Image
            src="/images/Food/build-burger-slide-final.png"
            layout="fill"
            alt="name"
          />
        </ImageBanner>
      </ContentBanner>
      <ContentBanner img="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/red-hero-back-home.jpg?id=5681">
        <InfoBanner>
          <Title size="58px" color="#fff">
            {`YOUR BURG'R`}
          </Title>

          <Title size="70px" color="#fff">{`YOUR TASTE`}</Title>
          <P size="19px" color="#fff">
            Choose Your Favorite Ingredients
          </P>
          <Button type="default" label="TRY COMBO PRODUCTS" />
        </InfoBanner>

        <ImageBanner>
          <Image
            src="/images/Food/build-burger-slide-final.png"
            layout="fill"
            alt="name"
          />
        </ImageBanner>
      </ContentBanner>
      <ContentBanner img="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/yellow-lafka-hero-back.jpg?id=5617">
        <InfoBanner>
          <Title size="58px" color="#fff">
            HOT & SPICY
          </Title>
          <Title size="70px" color="#fff">
            FRIED CHIK’N
          </Title>
          <P size="19px" color="#fff">
            Choose Your Favorite Ingredients
          </P>
          <Button type="default" label="TRY COMBO PRODUCTS" />
        </InfoBanner>

        <ImageBanner>
          <Image
            src="/images/Food/fried-chicken-slide-final.png"
            layout="fill"
            alt="name"
          />
        </ImageBanner>
      </ContentBanner>
    </BannerSlideWrapper>
  );
}
