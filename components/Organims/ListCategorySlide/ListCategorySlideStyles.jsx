

import Carousel from "react-elastic-carousel";
import styled from "styled-components"
export const WrapperListSlide = styled(Carousel)`
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
export const CategoryImage = styled.div`
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