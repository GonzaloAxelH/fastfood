import { connect } from "react-redux";
import React, { useState, useEffect, useContext } from "react";
//data
import {
  actionAddOrderCart,
  actionSaveCart,
} from "../../../redux/actioncreators/actonsCart";
import { FullContext } from "../../../pages/_app";

//components
import ButtonOrder from "../../Atoms/Buttons/Button";
import InputExtraToppings from "../../Molecules/Inputs/InputExtraToppings";
import InpusCrust from "../../Molecules/Inputs/InpusCrust";
import InputSize from "../../Molecules/Inputs/InputSize";
import InputQuantity from "../../Molecules/Inputs/InputQuantity";
import ShowPrice from "../../Molecules/Prices/ShowPrice";
import usePriceFormat from "../../../Hooks/usePriceFormat";
//Styles
import {
  WrapperForm,
  Price,
  AllPricesOrder,
  FormBottom,
} from "./FormOrderProductStyles";

function FormOrderProduct({ product, addProductCart }) {
  const { setOpenSlidingOrderProduct, setOpenCart } = useContext(FullContext);
  const [state, setState] = useState({
    priceOptions: 0,
    priceUnit: product.price,
    priceOptionAndPriceUnit: 0,
    subTotal: 0,
    sizeOrder: product.sizes[0] || {},
    crustOrder: product.crusts[0] || {},
    extraToppingsOrder: [],
    quantityOrder: 1,
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
      priceOptionAndPriceUnit: product.price + state.priceOptions,
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
    state.subTotal,
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
    const productOrder = {
      idProduct: product.idProduct,
      name: product.name,
      priceUnit: product.price,
      imageLocal: product.imageLocal,
      quantity: state.quantityOrder,
      size: state.sizeOrder,
      customOptions: {
        crusts: state.crustOrder,
        extraToppings: state.extraToppingsOrder,
      },
      optionsPrice: state.priceOptions,
      subtotal: state,
      product: product,
    };
    addProductCart(productOrder);
    setOpenSlidingOrderProduct(false);
    setTimeout(() => {
      setOpenCart(true);
    }, 1000);
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
            limit={product.stock}
          />
          <ButtonOrder type="primary" submit={true}>
            Order
          </ButtonOrder>
        </FormBottom>
      </form>
    </WrapperForm>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProductCart: (productOrder) => {
      dispatch(actionAddOrderCart(productOrder));
      dispatch(actionSaveCart());
    },
  };
};
export default connect(null, mapDispatchToProps)(FormOrderProduct);
