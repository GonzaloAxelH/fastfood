import React from "react";
import styled from "styled-components";
import Item from "./Item";
import { BiHeart, BiUser, BiSearch, BiCart } from "react-icons/bi";
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

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: 174px;
    width: 48px;

    padding: 11px;
  }
`;

export default function MiniNav() {
  return (
    <MiniNavWrapper>
      <Item
        type="account"
        onClick={() => alert("Account Onclick")}
        Icon={BiUser}
      />
      <Item
        type="favorite"
        onClick={() => alert("Favorite Onclick")}
        Icon={BiHeart}
        number={2}
      />

      <Item
        type="cart"
        onClick={() => alert("Cart Onclick")}
        Icon={BiCart}
        number={1}
      />
      <Item
        type="search"
        onClick={() => alert("Search Onclick")}
        Icon={BiSearch}
      />
    </MiniNavWrapper>
  );
}
