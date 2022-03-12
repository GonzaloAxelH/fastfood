import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Carousel, { consts } from "react-elastic-carousel";
import Title from "../../Atoms/Titles/Title";
import P from "../../Atoms/Parrafos/P";
import Button from "../../Atoms/Buttons/index";
const BannerSlideWrapper = styled(Carousel)`
  width: 100vw;
  min-height: 130vh;
  .rec-slider-container {
    margin: 0;
  }

  cursor: -webkit-grab; /* Chrome 1-21, Safari 4+ */
  cursor: -moz-grab; /* Firefox 1.5-26 */
  cursor: grab; /* W3C standards syntax, should come least */

  .rec.rec-arrow {
    position: absolute;
    display: none;
    border-radius: 50px;
    background-color: #fff;
    color: red;
    border: none;
    margin-top: 5em;
    margin-left: 0.5em;
    margin-right: 0.5em;
  }

  .rec-pagination {
    display: none;
  }

  .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
  }
  .izuVIe {
    justify-content: flex-start;
    width: 100%;
  }
  .rec-carousel-item {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
const Content = styled.div`
  background-image: url(${(props) => props.img});
  width: 100%;
  padding: 200px 150px 50px 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${(props) => props.theme.screens.tabletXL}) {
    flex-direction: column;
    justify-content: center;
    padding: 230px 0px 50px 0px;
  }

  @media (max-width: ${(props) => props.theme.screens.desktop}) {
    padding: 200px 50px 50px 50px;
  }
`;
const InfoBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.screens.tabletXL}) {
    align-items: center;
  }
  p {
    @media (max-width: ${(props) => props.theme.screens.tabletXL}) {
      text-align: center;
    }
    margin-top: 1em;
  }
  button {
    max-width: 193px;
  }
`;
const ImageBanner = styled.div`
  position: relative;
  width: 540px;
  height: 540px;
  transition: 03s all;

  margin-right: -3em;
  img {
    object-fit: contain;
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  @media (max-width: ${(props) => props.theme.screens.tabletL}) {
    width: 440px;
    height: 440px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobileL}) {
    width: 340px;
    height: 340px;
  }
`;
export default function BannerSlide() {
  const [position, setPosition] = React.useState(0);
  return (
    <BannerSlideWrapper
      className="slide"
      itemsToScroll={1}
      itemsToShow={1}
      enableAutoPlay
      autoPlaySpeed={3000}
      onChange={(currentItem, pageIndex) => setPosition(pageIndex)}
    >
      <ContentBanner background="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/yellow-lafka-hero-back.jpg?id=5617">
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
      <ContentBanner background="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/red-hero-back-home.jpg?id=5681">
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
      <ContentBanner background="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2021/06/yellow-lafka-hero-back.jpg?id=5617">
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

function ContentBanner({ background, children }) {
  return <Content img={background}>{children}</Content>;
}
