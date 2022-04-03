
import styled from "styled-components";
export const NavCategoryContainer = styled.div`
  position: relative;
  background-color: #fcb900;
  display: flex;

  justify-content: center;
  border-radius: 8px;

  &::before {
    position: absolute;
    content: "";
    bottom: 20px;
    left: 20px;
    width: 50%;
    top: 40px;
    background: 0 0;
    -moz-box-shadow: 0 15px 13px #333333;
    box-shadow: 0 15px 13px #333333;
    -webkit-transform: rotate(-2deg);
    -moz-transform: rotate(-2deg);
    -o-transform: rotate(-2deg);
    -ms-transform: rotate(-2deg);
    transform: rotate(-2deg);
    z-index: -1;
  }
  &::after {
    position: absolute;
    content: "";
    bottom: 20px;
    width: 50%;
    right: 20px;
    top: 40px;
    background: 0 0;
    -moz-box-shadow: 0 15px 13px #333333;
    box-shadow: 0 15px 13px #333333;
    -webkit-transform: rotate(2deg);
    -moz-transform: rotate(2deg);
    -o-transform: rotate(2deg);
    -ms-transform: rotate(2deg);
    transform: rotate(2deg);
    z-index: -1;
  }

  max-height: ${(props) => (props.offset == 0 ? "4em" : "0")};

  overflow: ${(props) => (props.offset == 0 ? "visible" : "hidden")};
  transition: 0.2s all;

  .item-1,
  .item-2,
  .item-3,
  .item-4,
  .item-5,
  .item-6,
  .item-7 {
    display: flex;
  }
  @media (max-width: ${(props) => props.theme.screens.desktop}) {
    .item-1,
    .item-2 {
      display: none;
    }
  }
  @media (max-width: ${(props) => props.theme.screens.tabletXL}) {
    .item-1,
    .item-2,
    .item-3 {
      display: none;
    }
  }

  @media (max-width: ${(props) => props.theme.screens.tabletXL}) {
    .item-1,
    .item-2,
    .item-3,
    .item-4,
    .item-5,
    .item-6,
    .item-7 {
      display: none;
    }
  }
`;

