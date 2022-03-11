import React from "react";
import styled from "styled-components";
import Image from "next/image";
import BurguerIcon from "../../../Atoms/Icons/CategoryIcons/BurguerIcon";
import Title from "../../../Atoms/Titles/Title";
const CombosWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 2em;
  width: 850px;
  height: 360px;
  justify-content: space-between;
`;
const ImageWrapper = styled.div`
  position: relative;
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
const ListCombos = styled.div`
  justify-self: center;
`;
const Combo = styled.div`
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
  display: flex;
  margin: 0.3em 0.3em 0.3em 0em;
  padding: 0.5em 0.5em 0.5em 0em;
  align-items: center;
  span {
    margin-left: 0.5em;
  }
  svg {
    width: 1.5em;
  }
`;
export default function index() {
  return (
    <CombosWrapper>
      <ImageWrapper>
        <Image
          src="/images/Food/menu-banner-combo.jpg"
          layout="fill"
          blurDataURL="/images/Food/menu-banner-combo.jpg"
          objectFit="contain"
          alt="menu-banner-combo"
        />
      </ImageWrapper>
      <ListCombos>
        <Title>Popular combos</Title>
        <Combo>
          <BurguerIcon />
          <span>Burguer + Fries</span>
        </Combo>

        <Combo>
          <BurguerIcon />
          <span>Burguer + Shake</span>
        </Combo>
        <Combo>
          <BurguerIcon />
          <span>Burguer + Fries</span>
        </Combo>
        <Combo>
          <BurguerIcon />
          <span>Burguer + Fries</span>
        </Combo>
      </ListCombos>
    </CombosWrapper>
  );
}
