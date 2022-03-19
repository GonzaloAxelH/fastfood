import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ButtonOrder from "../../Atoms/Buttons/Button";
import InputExtraToppings from "../../Molecules/Inputs/InputExtraToppings";
import InpusCrust from "../../Molecules/Inputs/InpusCrust";
import InputSize from "../../Molecules/Inputs/InputSize";
import InputQuantity from "../../Molecules/Inputs/InputQuantity";
const WrapperForm = styled.div``;
const Price = styled.div`
  padding: 0.5em 0 0 0;
  background-color: #fff;
  border-radius: 12px;
  font-size: 30px;
  font-family: "Rubik 700";
  &:before {
    content: "$";
    font-size: 24px;
  }
  sup {
    font-size: 20px;
    margin-left: -6px;
  }
`;
const FormBottom = styled.div`
  display: flex;
  width: 100%;
  button {
    width: 200px;
    margin: 0 1em;
  }
`;
export const product = {
  sizes: [
    { medida: "12", price: 0 },
    {
      medida: "15",
      price: 4,
    },
    { medida: "18", price: 8 },
  ],
  unitPrice: 14,
  stock: 10,
  crusts: [
    { name: "Thin Crust", price: 0 },
    { name: "Stuffed Crust", price: 0.4 },
    { name: "Deep Dish", price: 0.5 },
  ],
  extras: [
    { name: "Chesse", price: 0.5 },
    { name: "Pepperoni", price: 0.5 },
    { name: "Sausage", price: 0.5 },
    { name: "Mushrooms", price: 0.5 },
    { name: "Onions", price: 0.5 },
    { name: "Green Peppers", price: 0.5 },
  ],
};

export default function FormOrderProduct() {
  const [totalPrice, setTotalPrice] = useState(product.unitPrice);
  const [productOrder, setProductOrder] = useState({});
  const [sizeOrder, setSizeOrder] = useState(product.sizes[0]);
  const [crustOrder, setCrustOrder] = useState(product.crusts[0]);
  const [extraToppingsOrder, setExtraToppingsOrder] = useState([]);
  const [quantityOrder, setQuantityOrder] = useState(1);
  const calculateTotalPrice = () => {
    const total =
      sizeOrder.price +
      crustOrder.price +
      product.unitPrice +
      extraToppingsOrder.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };
  useEffect(() => {
    calculateTotalPrice();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      size: sizeOrder,
      crust: crustOrder,
      extraToppings: extraToppingsOrder,
      quantity: quantityOrder,
      totalPrice: totalPrice * quantityOrder,
    });
  };
  return (
    <WrapperForm onSubmit={handleSubmit}>
      <form>
        <Price>
          {totalPrice * quantityOrder} <sup>.99</sup>
        </Price>
        <InputSize size={sizeOrder} getSize={(si) => setSizeOrder(si)} />
        <InpusCrust crust={crustOrder} getCrust={(cr) => setCrustOrder(cr)} />
        <InputExtraToppings
          extrasOrder={extraToppingsOrder}
          getExtra={(etrTp, isChecked) => {
            if (isChecked) {
              let oldExtras = extraToppingsOrder;
              let newExtras = oldExtras.concat(etrTp);
              setExtraToppingsOrder(newExtras);
            } else {
              let newExtras = extraToppingsOrder.filter((et) => et !== etrTp);
              setExtraToppingsOrder(newExtras);
            }
          }}
        />
        <FormBottom>
          <InputQuantity
            quantity={quantityOrder}
            getQuantity={(q) => {
              setQuantityOrder(q);
            }}
            limit={product.stock}
          />
          <ButtonOrder label="Order" type="default" submit={true} />
        </FormBottom>
      </form>
    </WrapperForm>
  );
}
