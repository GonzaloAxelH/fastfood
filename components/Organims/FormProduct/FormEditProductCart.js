import { connect } from "react-redux";
import React, { useState, useEffect, useContext } from "react";
//data
import {
  actionAddOrderCart,
  actionSaveCart,
  actionUpdateOrderCart,
} from "../../../redux/actioncreators/actonsCart";
import { FullContext } from "../../../pages/_app";
//components
import ButtonOrder from "../../Atoms/Buttons/Button";
import InputExtraToppings from "../../Molecules/Inputs/InputExtraToppings";
import InpusCrust from "../../Molecules/Inputs/InpusCrust";
import InputSize from "../../Molecules/Inputs/InputSize";
import InputQuantity from "../../Molecules/Inputs/InputQuantity";
import ShowPrice from "../../Molecules/Prices/ShowPrice";
import { BallBeat } from "react-pure-loaders";
import usePriceFormat from "../../../Hooks/usePriceFormat";
//Styles
import {
  WrapperForm,
  Price,
  AllPricesOrder,
  FormBottom,
} from "./FormOrderProductStyles";

function FormEditOrderCart({ productCart, updateOrderCart }) {
  const { setOpenSlidingEditCart } = useContext(FullContext);
  const [state, setState] = useState({
    priceOptions: 0,
    priceUnit: productCart.priceUnit || 0,
    priceOptionAndPriceUnit: 0,
    subTotal: 0,
    sizeOrder: productCart.size || {},
    crustOrder: productCart.customOptions.crusts || {},
    extraToppingsOrder: productCart.customOptions.extraToppings || [],
    quantityOrder: productCart.quantity || 1,
  });
  const setSubTotal = () => {
    let countPriceExtraToppingsOrder = state.extraToppingsOrder.reduce(
      (acc, item) => acc + item.price,
      0
    );
    setState({
      ...state,
      priceOptions:
        state.sizeOrder.price +
        state.crustOrder.price +
        countPriceExtraToppingsOrder,
      priceOptionAndPriceUnit: productCart.priceUnit + state.priceOptions,
      subTotal: state.priceOptionAndPriceUnit * state.quantityOrder,
    });
  };
  const setSizeOrder = (size) => {
    setState({ ...state, sizeOrder: size });
  };
  const setCrustOrder = (cr) => {
    setState({ ...state, crustOrder: cr });
  };
  const setExtraToppingsOrder = (extraItem, action) => {
    if (action === "REMOVE") {
      let newExtras = state.extraToppingsOrder.filter(
        (et) => et.name !== extraItem.name
      );
      setState({ ...state, extraToppingsOrder: newExtras });
    }
    if (action === "ADD") {
      setState({
        ...state,
        extraToppingsOrder: state.extraToppingsOrder.concat(extraItem),
      });
    }
  };
  const setQuantityOrder = (num) => {
    setState({ ...state, quantityOrder: num });
  };

  useEffect(() => {
    setSubTotal();
  }, [
    state.priceUnit,
    state.extraToppingsOrder,
    state.crustOrder,
    state.quantityOrder,
    state.sizeOrder,
    state.priceOptions,
    state.priceOptionAndPriceUnit,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrderCart = {
      idProduct: productCart.idProduct,
      name: productCart.name,
      priceUnit: productCart.priceUnit,
      imageLocal: productCart.imageLocal,
      quantity: state.quantityOrder,
      size: state.sizeOrder,
      customOptions: {
        crusts: state.crustOrder,
        extraToppings: state.extraToppingsOrder,
      },
      optionsPrice: state.priceOptions,
      subtotal: state,
      product: productCart.product,
    };

    updateOrderCart(newOrderCart);
    setOpenSlidingEditCart(false);
  };

  const updateExtraToppingsOrder = (extraToppingItem, isChecked) => {
    isChecked
      ? setExtraToppingsOrder(extraToppingItem, "ADD")
      : setExtraToppingsOrder(extraToppingItem, "REMOVE");
  };

  return (
    <WrapperForm onSubmit={handleSubmit}>
      <form>
        <Price>
          {usePriceFormat(state.priceUnit).intPrice}
          <sup>.{usePriceFormat(state.priceUnit).decimalPrice}</sup>
        </Price>
        <InputSize size={state.sizeOrder} getSize={(si) => setSizeOrder(si)} />
        <InpusCrust
          crust={state.crustOrder}
          getCrust={(cr) => setCrustOrder(cr)}
        />

        <InputExtraToppings
          extrasOrder={state.extraToppingsOrder}
          getExtra={(extraToppingItem, isChecked) =>
            updateExtraToppingsOrder(extraToppingItem, isChecked)
          }
        />

        <AllPricesOrder>
          <ShowPrice label="Options C/U " priceQuantity={state.priceOptions} />
          <ShowPrice
            label="Unit Original C/U"
            priceQuantity={state.priceUnit}
          />
          <hr />
          <ShowPrice
            label="Price C/U + options"
            priceQuantity={state.priceOptionAndPriceUnit}
          />
          <hr />
          <ShowPrice label="Sub Total" priceQuantity={state.subTotal} />
        </AllPricesOrder>

        <FormBottom>
          <InputQuantity
            quantity={state.quantityOrder}
            getQuantity={(q) => {
              setQuantityOrder(q);
            }}
            limit={productCart.product.stock}
          />
          <ButtonOrder type="primary" submit={true}>
            Edit Order Cart
          </ButtonOrder>
        </FormBottom>
      </form>
    </WrapperForm>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateOrderCart: (newOrderCart) => {
      dispatch(actionUpdateOrderCart(newOrderCart));
      dispatch(actionSaveCart());
    },
  };
};
export default connect(null, mapDispatchToProps)(FormEditOrderCart);
