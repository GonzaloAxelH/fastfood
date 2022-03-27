import React, { useContext } from "react";
import HeaderPage from "../../../components/Templates/HeaderPage/HeaderPage";
import styled from "styled-components";

import { FiTrash2 } from "react-icons/fi";
import Layout from "../../../Layouts/Layout";
import ItemFoodCart from "../../../components/Molecules/ItemsFood/ItemFoodCart/ItemFoodCart";
import { cartTemp } from "../../../components/Templates/SlidingCart/tempData";
import ButtonOrder from "../../../components/Atoms/Buttons/ButtonOrder/ButtonOrder";
import { FullContext } from "../../_app";

const WrapperCartPage = styled.div`
  min-height: 100vh;
`;
const RowItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 2fr;
  justify-content: space-between;
  align-items: center;
  span:nth-child(1) {
    margin: auto;
  }

  span:nth-child(2) {
    width: 80%;
  }
`;
const ListItemsCart = styled.div``;
const CartTotals = styled.div``;
const Contenido = styled.div`
  display: grid;
  grid-template-columns: 6fr 2fr;
`;
export default function CartPage() {
  const { openOrderProduct, setOpenOrderProduct, setUpdateOrder } =
    useContext(FullContext);

  return (
    <Layout>
      <WrapperCartPage>
        <section>
          <HeaderPage title="CART" />
        </section>
        <section>
          <Contenido>
            <ListItemsCart>
              {cartTemp.items.map((el, index) => {
                return (
                  <RowItem key={index}>
                    <span>
                      <FiTrash2 />
                    </span>
                    <span>
                      <ItemFoodCart itemFood={el} />
                    </span>
                    <span>
                      <ButtonOrder
                        onClick={() => {
                          setTimeout(() => {
                            setUpdateOrder(true);
                            setOpenOrderProduct(true);
                          }, 400);
                        }}
                      >
                        Editar
                      </ButtonOrder>
                    </span>
                  </RowItem>
                );
              })}
            </ListItemsCart>
            <CartTotals></CartTotals>
          </Contenido>
        </section>
      </WrapperCartPage>
    </Layout>
  );
}
