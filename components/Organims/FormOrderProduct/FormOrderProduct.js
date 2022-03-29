import React, { useState, useEffect, useContext } from "react";
//components
import ButtonOrder from "../../Atoms/Buttons/Button";
import InputExtraToppings from "../../Molecules/Inputs/InputExtraToppings";
import InpusCrust from "../../Molecules/Inputs/InpusCrust";
import InputSize from "../../Molecules/Inputs/InputSize";
import InputQuantity from "../../Molecules/Inputs/InputQuantity";
import ShowPrice from "../../Molecules/Prices/ShowPrice";
import { BallBeat } from "react-pure-loaders";
//data
import { product, productOrder } from "./temp";
import { FullContext } from "../../../pages/_app";
//hooks
import usePriceFormat from "../../../Hooks/usePriceFormat";
//Styles
import {
  WrapperForm,
  Price,
  AllPricesOrder,
  FormBottom,
} from "./FormOrderProductStyles";

export default function FormOrderProduct() {
  //context
  const { setOpenCart, setOpenOrderProduct, updateOrder, setUpdateOrder } =
    useContext(FullContext);
  const [load, setLoad] = useState(false);
  const [priceUnit, setPriceUnit] = useState(0);
  const [priceOptions, setPriceOptions] = useState(0);
  const [priceOptionAndPriceUnit, setPriceOptionAndPriceUnit] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [sizeOrder, setSizeOrder] = useState({});
  const [crustOrder, setCrustOrder] = useState({});
  const [extraToppingsOrder, setExtraToppingsOrder] = useState([]);
  const [quantityOrder, setQuantityOrder] = useState(1);

  useEffect(() => {
    setPriceUnit(updateOrder ? productOrder.priceUnit : product.price);
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
  }, [updateOrder]);

  useEffect(() => {
    setPriceOptions(
      sizeOrder.price +
        crustOrder.price +
        extraToppingsOrder.reduce((acc, item) => acc + item.price, 0).toFixed(2)
    );
    setPriceOptionAndPriceUnit(priceUnit + priceOptions * 1);
    setSubTotal(priceOptionAndPriceUnit * quantityOrder.toFixed(2));
  }, [
    sizeOrder,
    crustOrder,
    extraToppingsOrder,
    quantityOrder,
    priceOptions,
    subTotal,
    priceUnit,
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

  const saveListCheckeds = (extraToppingItem, isChecked) => {
    if (isChecked) {
      let newExtras = extraToppingsOrder.concat(extraToppingItem);
      setExtraToppingsOrder(newExtras);
    } else {
      let newExtras = extraToppingsOrder.filter(
        (et) => et.name !== extraToppingItem.name
      );
      setExtraToppingsOrder(newExtras);
    }
  };

  const sendToUpdateOrderCart = () => {
    setLoad(true);
    setTimeout(() => {
      setUpdateOrder(false);
    }, 2000);
    setTimeout(() => {
      setOpenOrderProduct(false);
      setLoad(false);
    }, 800);
  };

  const sendOrderToCart = () => {
    setLoad(true);
    setOpenOrderProduct(false);
    setTimeout(() => {
      setLoad(false);
      setOpenCart(true);
    }, 1000);

    setTimeout(() => {
      setOpenCart(false);
    }, 5000);
  };

  return (
    <WrapperForm onSubmit={handleSubmit}>
      <form>
        <Price>
          {usePriceFormat(priceUnit).intPrice}
          <sup>.{usePriceFormat(priceUnit).decimalPrice}</sup>
        </Price>
        <InputSize size={sizeOrder} getSize={(si) => setSizeOrder(si)} />
        {crustOrder && (
          <InpusCrust crust={crustOrder} getCrust={(cr) => setCrustOrder(cr)} />
        )}
        <InputExtraToppings
          extrasOrder={extraToppingsOrder}
          getExtra={(extraToppingItem, isChecked) =>
            saveListCheckeds(extraToppingItem, isChecked)
          }
        />
        <AllPricesOrder>
          <ShowPrice label="Options C/U " priceQuantity={priceOptions} />
          <ShowPrice label="Unit Original C/U" priceQuantity={priceUnit} />
          <hr />
          <ShowPrice
            label="Price C/U + options"
            priceQuantity={priceOptionAndPriceUnit}
          />
          <hr />
          <ShowPrice label="Sub Total" priceQuantity={subTotal} />
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
            <ButtonOrder type="default" submit={true} onClick={sendOrderToCart}>
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
              onClick={sendToUpdateOrderCart}
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
