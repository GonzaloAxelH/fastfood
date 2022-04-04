import React, { useContext } from "react";
import { connect } from "react-redux";
import HeaderPage from "../../../components/Templates/HeaderPage/HeaderPage";
import { FiTrash2 } from "react-icons/fi";
import Layout from "../../../Layouts/Layout";
import ItemFoodCart from "../../../components/Molecules/ItemsFood/ItemFoodCart/ItemFoodCart";
import {
  WrapperCartPage,
  Contenido,
  ListItemsCart,
  RowItem,
} from "../../../styles/PageStyles/CartStyles.jsx";
import ButtonOrder from "../../../components/Atoms/Buttons/ButtonOrder/ButtonOrder";
import { FullContext } from "../../_app";
import {
  actionDeleteOrderCart,
  actionSaveCart,
  actionSetProductCart,
} from "../../../redux/actioncreators/actonsCart";
import { actionSetProduct } from "../../../redux/actioncreators/actionsProducts";

function CartPage({ productsCart, setOrderCart, setProduct, deleteOrderCart }) {
  const { setOpenSlidingEditCart } = useContext(FullContext);

  const handleClickEditOrder = (productCart) => {
    setOrderCart(productCart);
    setProduct(productCart.product);
    setOpenSlidingEditCart(true);
  };
  return (
    <Layout>
      <WrapperCartPage>
        <section>
          <HeaderPage title="CART" />
        </section>
        <section>
          <Contenido>
            <ListItemsCart>
              {productsCart.map((itemCart, index) => {
                return (
                  <RowItem key={index}>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteOrderCart(itemCart)}
                    >
                      <FiTrash2 />
                    </span>
                    <span>
                      <ItemFoodCart itemFood={itemCart} />
                    </span>
                    <span>
                      <ButtonOrder
                        onClick={() => handleClickEditOrder(itemCart)}
                      >
                        Editar
                      </ButtonOrder>
                    </span>
                  </RowItem>
                );
              })}
            </ListItemsCart>
          </Contenido>
        </section>
      </WrapperCartPage>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    productsCart: state.productsCart.allProductsCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setOrderCart: (orderCart) => {
      dispatch(actionSetProductCart(orderCart));
      dispatch(actionSaveCart());
    },
    setProduct: (product) => {
      dispatch(actionSetProduct(product));
    },
    deleteOrderCart: (orderCart) => {
      dispatch(actionDeleteOrderCart(orderCart));
      dispatch(actionSaveCart());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
