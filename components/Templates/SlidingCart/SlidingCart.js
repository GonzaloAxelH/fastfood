import React, { useContext } from "react";
import SlidingPortal from "../../Portals/SlidingPortal";
import Button from "../../Atoms/Buttons/Button";
import { FiShoppingBag, FiCreditCard } from "react-icons/fi";
import { useRouter } from "next/router";
import ItemFoodCart from "../../Molecules/ItemsFood/ItemFoodCart/ItemFoodCart";
import { cartTemp } from "./tempData";
import { FullContext } from "../../../pages/_app";
import { FiTrash2 } from "react-icons/fi";
import styled from "styled-components";

import {
  CartWrapper,
  CartContent,
  CartAmmount,
  CartButtons,
  CartPriceTotal,
} from "./SlidingCartStyles.jsx";

const DeleteProduct = styled.div`
  cursor: pointer;
  margin: 0 1em;
`;
function SlidingCart() {
  const router = useRouter();
  const { openCart, setOpenCart } = useContext(FullContext);
  return (
    <SlidingPortal isOpen={openCart} setIsOpen={setOpenCart}>
      <CartWrapper>
        <CartContent>
          {cartTemp.items.map((item) => {
            return (
              <div
                key={item.idProduct}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #f1f1f1",
                }}
              >
                <ItemFoodCart itemFood={item} />
                <DeleteProduct>
                  <FiTrash2 />
                </DeleteProduct>
              </div>
            );
          })}
        </CartContent>
        <CartAmmount>
          <p>Subtotal</p>
          <CartPriceTotal>
            <span>
              $469.00 <sup>.78</sup>
            </span>
          </CartPriceTotal>
        </CartAmmount>
        <CartButtons>
          <Button
            type="primary"
            onClick={() => {
              setOpenCart(false);
              setTimeout(() => {
                router.push("/fastfood/cart");
              }, 500);
            }}
          >
            <FiShoppingBag />
            VIEW CART
          </Button>

          <Button
            onClick={() => {
              setOpenCart(false);
              setTimeout(() => {
                router.push("/fastfood/checkout");
              }, 500);
            }}
          >
            <FiCreditCard />
            CHECKOUT
          </Button>
        </CartButtons>
      </CartWrapper>
    </SlidingPortal>
  );
}

export default SlidingCart;
