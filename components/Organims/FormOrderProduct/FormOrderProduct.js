import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ButtonOrder from "../../Atoms/Buttons/Button";
import ServingSize from "../../Molecules/ServingSize/ServingSize";
const WrapperForm = styled.div``;
const FoodCrust = styled.div`
  .title-abs {
    font-size: 14px;
    font-family: "Rubik 700";
  }
`;
const ExtraToppings = styled.div`
  .title-abs {
    font-size: 14px;
    font-family: "Rubik 700";
  }
`;
const Price = styled.div`
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
const InputSelectSize = styled.div`
  display: flex;
  align-items: center;

  margin: 1em 0;
  p {
    padding: 0 2em 0 0;
    color: #333;
    font-size: 12px;
    font-family: "Rubik 500";
    text-transform: uppercase;
  }
`;
const Size = styled.span`
  padding: 1em;
  cursor: pointer;
  border-radius: 5px;
  margin: 0.3em;
  sup {
    margin-left: -5px;
  }
  color: ${(props) => (props.isSelect ? "#fff" : "#000")};
  font-size: 13px;
  font-family: "Rubik 400";
  background-color: ${(props) => (props.isSelect ? "#f2002d" : "#f8f8f8")};
  &:hover {
    background-color: ${(props) => (props.isSelect ? "#f2002d" : "#f8f8f8")};
  }
  transition: 0.2s all;
`;

const FormBottom = styled.div`
  display: flex;
`;
const product = {
  sizes: ["11", "14", "18"],
  unitPrice: 14,
  stock: 10,
};

export default function FormOrderProduct() {
  const [productOrder, setProductOrder] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <WrapperForm onSubmit={handleSubmit}>
      <form>
        <Price>
          {product.unitPrice} <sup>.99</sup>
        </Price>
        <InputSize />
        <InpusCrust />
        <InputExtraToppings />
        <FormBottom>
          <InputQuatity limit={product.stock} />
          <ButtonOrder type="default" submit={true}>
            Order
          </ButtonOrder>
        </FormBottom>
      </form>
    </WrapperForm>
  );
}

const Contador = styled.div`
  background-color: #f5f5f5;
  padding: 0 5px;
  border-radius: 999px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer */
    -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
    -webkit-user-select: none; /* Chrome, Safari, and Opera */
    -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
  }
  span:nth-child(1),
  span:nth-child(3) {
    padding: 1em;
    cursor: pointer;
  }
`;
function InputQuatity({ limit }) {
  const [quantityOrder, setQuantityOrder] = useState(1);
  const decrement = () => {
    if (quantityOrder > 1) {
      setQuantityOrder(quantityOrder - 1);
    }
  };
  const increment = () => {
    if (quantityOrder < limit) {
      setQuantityOrder(quantityOrder + 1);
    }
  };
  return (
    <Contador>
      <span onClick={increment}>+</span>
      <span>{quantityOrder}</span>
      <span onClick={decrement}>-</span>
    </Contador>
  );
}

function InputExtraToppings() {
  let extras = [
    { name: "Chesse", price: 0.5 },
    { name: "Pepperoni", price: 0.5 },
    { name: "Sausage", price: 0.5 },
    { name: "Mushrooms", price: 0.5 },
    { name: "Onions", price: 0.5 },
    { name: "Green Peppers", price: 0.5 },
  ];
  return (
    <ExtraToppings>
      <p className="title-abs">EXTRA TOPPINGS</p>
      <div className="inputs-checkboxs">
        {extras.map((extra, index) => {
          return (
            <div key={index}>
              <input type="checkbox" />
              <label htmlFor="">
                <span>
                  {extra.name} {extra.price}
                </span>
              </label>
            </div>
          );
        })}
      </div>
    </ExtraToppings>
  );
}

function InpusCrust() {
  let crusts = [
    { name: "Thin Crust", price: 0 },
    { name: "Stuffed Crust", price: 0.4 },
    { name: "Deep Dish", price: 0.5 },
  ];
  const [crustOrder, setCrustOrder] = useState(crusts[0].name);
  return (
    <FoodCrust>
      <p className="title-abs">CRUST</p>
      <div className="inputs-radios">
        {crusts.map((crust, index) => {
          return (
            <div key={index}>
              <input
                onChange={() => setCrustOrder(crust.name)}
                type="radio"
                checked={crust.name === crustOrder}
              />
              <label htmlFor="">
                <span>
                  {crust.name} {crust.price === 0 ? "Free" : crust.price}
                </span>
              </label>
            </div>
          );
        })}
      </div>
    </FoodCrust>
  );
}

function InputSize() {
  const [sizeOrder, setSizeOrder] = useState(product.sizes[0]);
  return (
    <InputSelectSize>
      <p>SIZE</p>
      <div>
        {product.sizes.map((size, index) => {
          return (
            <Size
              key={index}
              isSelect={size === sizeOrder}
              onClick={() => setSizeOrder(size)}
            >
              {size} <sup>{`"`}</sup>
            </Size>
          );
        })}
      </div>
    </InputSelectSize>
  );
}
