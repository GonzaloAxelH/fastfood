import React, { useContext } from "react";
import SlidingPortal from "../../Portals/SlidingPortal";
import Button from "../../Atoms/Buttons/Button";
import { FiShoppingBag, FiCreditCard } from "react-icons/fi";
import { useRouter } from "next/router";
import ItemFoodCart from "../../Molecules/ItemsFood/ItemFoodCart/ItemFoodCart";
import { connect } from "react-redux";
import { FullContext } from "../../../pages/_app";
import { FiTrash2 } from "react-icons/fi";
import { getDecimalPrice, getNumberPrice } from "../../../helpers/cartHelpers";
import {
  CartWrapper,
  CartContent,
  CartAmmount,
  CartButtons,
  CartPriceTotal,
  CartItem,
  CartDelete,
} from "./SlidingCartStyles.jsx";
import {
  actionDeleteOrderCart,
  actionSaveCart,
} from "../../../redux/actioncreators/actonsCart";

function SlidingCart({ productsCart, deleteOrderCart }) {
  const router = useRouter();
  const { openCart, setOpenCart } = useContext(FullContext);
  const t = productsCart.reduce((acc, el) => {
    return acc + el.subtotal.subTotal;
  }, 0);
  const total = t.toFixed(2);
  return (
    <SlidingPortal isOpen={openCart} setIsOpen={setOpenCart}>
      <CartWrapper>
        {productsCart && (
          <CartContent>
            {productsCart.map((itemCart) => {
              return (
                <CartItem key={itemCart.idProduct}>
                  <ItemFoodCart itemFood={itemCart} />
                  <CartDelete onClick={() => deleteOrderCart(itemCart)}>
                    <FiTrash2 />
                  </CartDelete>
                </CartItem>
              );
            })}
          </CartContent>
        )}
        <CartAmmount>
          <p>Subtotal</p>
          <CartPriceTotal>
            <span>
              {getNumberPrice(total)} <sup>.{getDecimalPrice(total)}</sup>
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

const mapStateToProps = (state) => {
  return {
    productsCart: state.productsCart.allProductsCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteOrderCart: (orderCart) => {
      dispatch(actionDeleteOrderCart(orderCart));
      dispatch(actionSaveCart());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SlidingCart);
