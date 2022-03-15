import React from "react";
import styled from "styled-components";
import SlidingPortal from "../../Portals/SlidingPortal";
import { useState, useEffect } from "react";
import ItemFavoriteFood from "../../Molecules/ItemsFood/ItemFavoriteFood/ItemFavoriteFood";

const tempFavorite = [
  {
    id: 1,
    product: {
      idProduct: "snm5t94578g4958",
      img: "/images/Food/bacon-chesseburger.jpg",
      name: "Portobello ‘Shroom Burger",
      price: 18.94,
    },
  },
  {
    id: 2,
    product: {
      idProduct: "3fm893jc978ccj889",
      img: "/images/Food/jalapeno-angus-burger.jpg",
      name: "Bacon Cheeseburger",
      price: 12.14,
    },
  },
  {
    id: 3,
    product: {
      idProduct: "fjkc8cu8uc89c",
      img: "/images/Food/chocolate-fudge-cake.jpg",
      name: "Portobello ‘Shroom Burger",
      price: 1.34,
    },
  },
  {
    id: 2,
    product: {
      idProduct: "c87whc8ch8ch78ch8",
      img: "/images/Food/jalapeno-angus-burger.jpg",
      name: "Bacon Cheeseburger",
      price: 9.99,
    },
  },
];
const WrapperFavorites = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1em;
  align-items: center;
  width: calc(100% - 60px);
  max-width: 700px;
  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    width: 100%;
  }
  -webkit-transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  border-bottom: 1px solid #f1f1f1;
  border-top: 1px solid #f1f1f1;
  height: 80vh;
  overflow-y: auto;
  margin-top: 4em;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar:vertical {
    width: 8px;
  }

  &::-webkit-scrollbar-button:increment,
  &::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar:horizontal {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 20px;
    border: 2px solid #f1f2f3;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;
function SlidingFavorite({ favoriteIsOpen, closeSlidingFavorite }) {
  return (
    <SlidingPortal isOpen={favoriteIsOpen} handleClose={closeSlidingFavorite}>
      <WrapperFavorites>
        {tempFavorite.map((item) => {
          return <ItemFavoriteFood key={item.id} item={item} />;
        })}
      </WrapperFavorites>
    </SlidingPortal>
  );
}

export default SlidingFavorite;
