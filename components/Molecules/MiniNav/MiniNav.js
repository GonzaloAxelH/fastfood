import React from "react";
import styled from "styled-components";
import Item from "./Item";

import {
  FiMenu,
  FiShoppingBag,
  FiHeart,
  FiUser,
  FiSearch,
} from "react-icons/fi";
const MiniNavWrapper = styled.div`
  background-color: #fff;
  border-radius: 99px;
  display: flex;
  align-items: center;
  width: 184px;
  height: 48px;
  justify-content: center;
  padding: 6px 11px 6px 5px;
  box-shadow: 0 0 30px rgb(0 0 0 / 12%);
  -moz-box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 0 30px 0 rgb(0 0 0 / 12%);

  @media (max-width: ${(props) => props.theme.screens.tabletL}) {
    flex-direction: column;
    justify-content: center;
    height: 174px;
    width: 48px;
    padding: 11px;
    position: absolute;
    right: 1em;
    bottom: -27em;
  }
`;
import { FullContext } from "../../../pages/_app";
export default function MiniNav() {
  const { setOpenPerfil, setOpenCart, setOpenFavorites, setOpenSearching } =
    React.useContext(FullContext);

  return (
    <MiniNavWrapper>
      <Item type="account" onClick={() => setOpenPerfil(true)} Icon={FiUser} />
      <Item
        type="favorite"
        onClick={() => setOpenFavorites(true)}
        Icon={FiHeart}
        number={2}
      />

      <Item
        type="cart"
        onClick={() => setOpenCart(true)}
        Icon={FiShoppingBag}
        number={1}
      />
      <Item
        type="search"
        onClick={() => setOpenSearching(true)}
        Icon={FiSearch}
      />
    </MiniNavWrapper>
  );
}
