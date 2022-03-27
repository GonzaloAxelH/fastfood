import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ButtonOrder from "../../Atoms/Buttons/Button";
import InputExtraToppings from "../../Molecules/Inputs/InputExtraToppings";
import InpusCrust from "../../Molecules/Inputs/InpusCrust";
import InputSize from "../../Molecules/Inputs/InputSize";
import InputQuantity from "../../Molecules/Inputs/InputQuantity";
import usePriceFormat from "../../../Hooks/usePriceFormat";
import {
  WrapperForm,
  Price,
  AllPricesOrder,
  FormBottom,
} from "./FormOrderProductStyles";
import { product, productOrder } from "./temp";
import { BallBeat } from "react-pure-loaders";
import { FullContext } from "../../../pages/_app";

export default function FormOrderProduct() {
  //context
  const {
    setOpenCart,
    setOpenOrderProduct,

    updateOrder,
    setUpdateOrder,
  } = React.useContext(FullContext);
  //loads
  const [load, setLoad] = useState(false);
  //totals
  const [priceOptions, setPriceOptions] = useState(0);
  const [priceOptionAndPriceUnit, setPriceOptionAndPriceUnit] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  // options state
  const [sizeOrder, setSizeOrder] = useState(
    updateOrder ? productOrder.size : product.sizes[0]
  );
  const [crustOrder, setCrustOrder] = useState(product.crusts[0]);
  const [extraToppingsOrder, setExtraToppingsOrder] = useState([
    updateOrder ? productOrder.customOptions.extraToppings : [],
  ]);
  const [quantityOrder, setQuantityOrder] = useState(1);

  //hook para formatear el precio
  const priceUnitFormat = usePriceFormat(product.price);
  const priceOptionsFormat = usePriceFormat(priceOptions);
  const subTotalFormat = usePriceFormat(subTotal);

  const priceOptionAndPriceUnitFormat = usePriceFormat(priceOptionAndPriceUnit);
  useEffect(() => {
    setSizeOrder(updateOrder ? productOrder.size : product.sizes[0]);
    setCrustOrder(
      updateOrder
        ? productOrder.customOptions.crusts
          ? productOrder.customOptions.crusts
          : false
        : product.crusts[0]
    );
    setExtraToppingsOrder(
      updateOrder ? productOrder.customOptions.extraToppings : []
    );
    setQuantityOrder(updateOrder ? productOrder.quantity : 1);
    console.log("render eseEffect change update order");
  }, [updateOrder]);

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
    console.log("render form");
  }, [
    sizeOrder,
    crustOrder,
    extraToppingsOrder,
    quantityOrder,
    priceOptions,
    subTotal,
    priceOptionAndPriceUnit,
  ]);

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
        {crustOrder && (
          <InpusCrust crust={crustOrder} getCrust={(cr) => setCrustOrder(cr)} />
        )}
        <InputExtraToppings
          extrasOrder={extraToppingsOrder}
          getExtra={(extraToppingItem, isChecked) => {
            if (isChecked) {
              let newExtras = extraToppingsOrder.concat(extraToppingItem);
              setExtraToppingsOrder(newExtras);
            } else {
              let newExtras = extraToppingsOrder.filter(
                (et) => et.name !== extraToppingItem.name
              );
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
          {!updateOrder && (
            <ButtonOrder
              type="default"
              submit={true}
              onClick={() => {
                setLoad(true);
                setOpenOrderProduct(false);
                setTimeout(() => {
                  setLoad(false);
                  setOpenCart(true);
                }, 1000);

                setTimeout(() => {
                  setOpenCart(false);
                }, 5000);
              }}
            >
              <span style={{ display: load ? "none" : "block" }}>
                Order Now
              </span>

              {load && <BallBeat color="#ffca3c" loading />}
            </ButtonOrder>
          )}

          {updateOrder && (
            <ButtonOrder
              type="primary"
              submit={true}
              onClick={() => {
                setLoad(true);
                setTimeout(() => {
                  setUpdateOrder(false);
                }, 2000);
                setTimeout(() => {
                  setOpenOrderProduct(false);
                  setLoad(false);
                }, 800);
              }}
            >
              <span style={{ display: load ? "none" : "block" }}>
                Update Order
              </span>

              {load && <BallBeat color="#ffca3c" loading />}
            </ButtonOrder>
          )}
        </FormBottom>
      </form>
    </WrapperForm>
  );
}
