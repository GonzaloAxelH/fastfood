import React, { useContext } from "react";
import styled from "styled-components";
import SlidingPortal from "../../Portals/SlidingPortal";
import Button from "../../Atoms/Buttons/Button";

import { FiShoppingBag, FiCreditCard } from "react-icons/fi";
import { useState, useEffect } from "react";
import ItemFoodCart from "../../Molecules/ItemsFood/ItemFoodCart/ItemFoodCart";
const CartWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  width: calc(100% - 40px);
  max-width: 600px;
  -webkit-transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
`;
const CartContent = styled.div`
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
  border-top: 1px solid #f1f1f1;
  height: 55vh;
  overflow-y: auto;
  margin-top: 3em;
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
const CartButtons = styled.div`
  width: 100%;
  display: flex;

  button {
    width: 100%;
    margin: 0 7px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

const CartAmmount = styled.div`
  margin-bottom: 3em;
  align-self: flex-start;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  padding: 0 1em;
  span {
    color: #333;
    font-size: 17px;

    font-family: "Rubik 600";
  }
  p {
    color: #888888;
    font-size: 17px;
    font-family: "Rubik 400";
  }
`;
const PriceTotal = styled.div``;

const cartTemp = {
  items: [
    {
      idProduct: "gmorv789vy789h789nj",
      name: "Jalapeno Angus Burger",
      priceUnit: 9.99,
      img: "/images/Food/bacon-chesseburger.jpg",
      quantity: 6,
      customOptions: {
        negativeAddons: [
          {
            name: "No Chesse",
            price: -1,
          },
          {
            name: "Extra Cheddar",
            price: 1,
          },
          {
            name: "Extra Cheddar",
            price: 1,
          },
        ],
        extraToppings: [
          {
            name: "Fried Onion ",
            price: 0.5,
          },
          {
            name: "Fried Onion ",
            price: 0.7,
          },
        ],
      },
    },
    {
      idProduct: "wvh8v678vhwvy",
      name: "Chocolate Fudge Cake",
      priceUnit: 4.99,
      quantity: 3,
      img: "/images/Food/chocolate-fudge-cake.jpg",
    },
    {
      idProduct: "wf789wyv78hw7v",
      name: "Build Your Own Pizza",
      priceUnit: 24.99,

      quantity: 2,
      img: "/images/Food/build-your-own-pizza.jpg",
      feactures: {
        crustType: [{ name: "Thin Crust", price: 0.0, size: `14"` }],
        chesse: [
          { name: "Mozzarella", price: 0.0 },
          { name: "Parmesan", price: 1.5 },
          { name: " Gorgonzola", price: 1.5 },
          { name: "Ricotta ", price: 1.5 },
        ],
        toppings: [
          { name: "Bacon", price: 4.0 },
          { name: "Sossage", price: 3.0 },
          { name: "Chicken", price: 3.0 },
          { name: " Ground Beef ", price: 3.0 },
          { name: "Pepperoni", price: 3.0 },
          { name: "Salami", price: 2.0 },
        ],
        veggiesGoodStuff: [
          { name: "Olives", price: 1.5 },
          { name: " Sauteed Onion", price: 1.5 },
          { name: " Fresh Basil", price: 1.5 },
          { name: "Corn", price: 0.75 },
          { name: " Mushroom", price: 0.75 },
          { name: "Tomato (diced)", price: 1.0 },
          { name: "Tomato (sliced)", price: 0.75 },
          { name: " Spinach", price: 0.75 },
        ],
      },
    },
    {
      idProduct: "sgsfwefvwcvwef",
      name: "Burguer Pro ",
      priceUnit: 9.99,
      img: "/images/Food/bacon-chesseburger.jpg",
      quantity: 6,
      customOptions: {
        negativeAddons: [
          {
            name: "No Chesse",
            price: -1,
          },
          {
            name: "Extra Cheddar",
            price: 1,
          },
          {
            name: "Extra Cheddar",
            price: 1,
          },
        ],
        extraToppings: [
          {
            name: "Fried Onion ",
            price: 0.5,
          },
          {
            name: "Fried Onion ",
            price: 0.7,
          },
        ],
      },
    },
  ],
};
import { FullContext } from "../../../pages/_app";
function SlidingCart() {
  const { openCart, setOpenCart } = useContext(FullContext);
  return (
    <SlidingPortal isOpen={openCart} setIsOpen={setOpenCart}>
      <CartWrapper>
        <CartContent>
          {cartTemp.items.map((item) => {
            return <ItemFoodCart key={item.idProduct} itemFood={item} />;
          })}
        </CartContent>
        <CartAmmount>
          <p>Subtotal</p>
          <PriceTotal>
            <span>
              $469.00 <sup>.78</sup>
            </span>
          </PriceTotal>
        </CartAmmount>
        <CartButtons>
          <Button type="primary">
            <FiShoppingBag />
            VIEW CART
          </Button>
          <Button>
            <FiCreditCard />
            CHECKOUT
          </Button>
        </CartButtons>
      </CartWrapper>
    </SlidingPortal>
  );
}

export default SlidingCart;
