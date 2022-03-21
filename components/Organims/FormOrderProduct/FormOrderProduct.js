import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ButtonOrder from "../../Atoms/Buttons/Button";
import InputExtraToppings from "../../Molecules/Inputs/InputExtraToppings";
import InpusCrust from "../../Molecules/Inputs/InpusCrust";
import InputSize from "../../Molecules/Inputs/InputSize";
import InputQuantity from "../../Molecules/Inputs/InputQuantity";
import usePriceFormat from "../../../Hooks/usePriceFormat";
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
      price: 0,
    },
    { medida: "18", price: 0 },
  ],
  price: 8.99,
  stock: 1000,
  crusts: [
    { name: "Thin Crust", price: 0 },
    { name: "Stuffed Crust", price: 0 },
    { name: "Deep Dish", price: 0 },
  ],
  extras: [
    { name: "Chesse", price: 1 },
    { name: "Pepperoni", price: 1 },
    { name: "Sausage", price: 0.5 },
    { name: "Mushrooms", price: 0.5 },
    { name: "Onions", price: 0.6 },
    { name: "Green Peppers", price: 0.4 },
    { name: "Other ", price: 0.2 },
    { name: "Potatos", price: 1.5 },
  ],
};

export default function FormOrderProduct() {
  //totals
  const [priceOptions, setPriceOptions] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [priceOptionAndPriceUnit, setPriceOptionAndPriceUnit] = useState(0);
  // options state
  const [sizeOrder, setSizeOrder] = useState(product.sizes[0]);
  const [crustOrder, setCrustOrder] = useState(product.crusts[0]);
  const [extraToppingsOrder, setExtraToppingsOrder] = useState([]);
  const [quantityOrder, setQuantityOrder] = useState(1);

  //hook para formatear el precio
  const priceUnitFormat = usePriceFormat(product.price);
  const priceOptionsFormat = usePriceFormat(priceOptions);
  const subTotalFormat = usePriceFormat(subTotal);

  const priceOptionAndPriceUnitFormat = usePriceFormat(priceOptionAndPriceUnit);
  useEffect(() => {
    const optionsfixed =
      sizeOrder.price +
      crustOrder.price +
      extraToppingsOrder.reduce((acc, item) => acc + item.price, 0).toFixed(2);
    let uno = 1;
    setPriceOptionAndPriceUnit(product.price + optionsfixed * uno.toFixed(2));
    setPriceOptions(optionsfixed);

    const subtotalfixed = priceOptionAndPriceUnit * quantityOrder.toFixed(2);
    setSubTotal(subtotalfixed);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      size: sizeOrder,
      crust: crustOrder,
      extraToppings: extraToppingsOrder,
      quantity: quantityOrder,
      optionsPrice: priceOptions,
      subtotal: subTotal,
    });
  };
  return (
    <WrapperForm onSubmit={handleSubmit}>
      <form>
        <Price>
          {priceUnitFormat.intPrice}
          <sup>.{priceUnitFormat.decimalPrice}</sup>
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
        <AllPricesOrder>
          {priceOptionsFormat !== 0 && (
            <div>
              <p>
                Options C/U :
                <span>
                  {priceOptionsFormat.intPrice}
                  <sup>
                    .
                    {priceOptionsFormat === 0
                      ? "00"
                      : priceOptionsFormat.decimalPrice}
                  </sup>
                </span>
              </p>
            </div>
          )}
          <div>
            <p>
              Unit Original C/U:
              <span>
                {priceUnitFormat.intPrice}
                <sup>.{priceUnitFormat.decimalPrice}</sup>
              </span>
            </p>
          </div>

          <hr />
          <div>
            <p>
              Price C/U + options:
              <span>
                {priceOptionAndPriceUnitFormat.intPrice}
                <sup>.{priceOptionAndPriceUnitFormat.decimalPrice}</sup>
              </span>
            </p>
          </div>
          <hr />
          <div>
            <p>
              Sub Total:
              <span>
                {subTotalFormat.intPrice}
                <sup>
                  .{subTotalFormat === 0 ? "00" : subTotalFormat.decimalPrice}
                </sup>
              </span>
            </p>
          </div>
        </AllPricesOrder>

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

const AllPricesOrder = styled.div`
  background-color: #fafafafa;
  width: 100%;
  padding: 20px 25px;
  border: 2px solid #f1f1f1;
  border-radius: 8px;
  position: relative;
  margin-bottom: 20px;
  width: 100%;
  hr {
    background-color: #f0f0f0;
    height: 1px;
    border: 0;
  }
  p {
    color: #666666;
    margin: 0;
    padding-bottom: 0.7em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 100%;
    font-size: 14px;
    font-family: "Rubik 500";
  }
  span {
    color: #333;
    font-size: 16px;
    font-family: "Rubik 700";
    text-align: center;
    justify-self: flex-start;
  }

  span:before {
    content: "$";
    font-size: 11px;
  }
`;
