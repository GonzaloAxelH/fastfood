import styled from "styled-components";

import Carousel from "react-elastic-carousel";
export const BannerSlideWrapper = styled(Carousel)`
  width: 100vw;

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
export const ContentBanner = styled.div`
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
export const InfoBanner = styled.div`
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
export const ImageBanner = styled.div`
  position: relative;
  width: 540px;
  height: 540px;
  transition: 03s all;

  margin-right: -3em;
  img {
    object-fit: contain;
    
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
