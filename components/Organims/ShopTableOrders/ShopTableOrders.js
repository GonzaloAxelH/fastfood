import React from "react";
import styled from "styled-components";
import { ordersTemp } from "./temp";
import ItemFoodCart from "../../Molecules/ItemsFood/ItemFoodCart/ItemFoodCart";
import { connect } from "react-redux";
import { getDecimalPrice, getNumberPrice } from "../../../helpers/cartHelpers";

const ShopTableOrdersWrapper = styled.div``;
const TableOrder = styled.table`
  th {
    text-align: left;
    font-family: "Rubik 600";
  }
  td {
    width: 100%;
  }
  td:nth-child(2) {
    font-family: "Rubik 400";

    display: flex;
  }
  .subtotal_order {
    font-family: "Rubik 600";
  }
  .subtotal_order sup {
    font-family: "Rubik 400";
  }
  .subtotal_order:before {
    content: "$";

    font-size: 13px;
  }
`;
function ShopTableOrders({ productsCart }) {
  return (
    <ShopTableOrdersWrapper>
      <TableOrder>
        <thead>
          <th>Product</th>
          <th>SubTotal</th>
        </thead>
        <tbody>
          {productsCart.map((el, index) => {
            return (
              <tr key={index}>
                <td>
                  <ItemFoodCart itemFood={el} />
                </td>
                <td>
                  <span className="subtotal_order">
                    {getNumberPrice(el.subtotal.subTotal)}
                    <sup>
                      .{getDecimalPrice(el.subtotal.subTotal.toFixed(2))}
                    </sup>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </TableOrder>
    </ShopTableOrdersWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    productsCart: state.productsCart.allProductsCart,
  };
};

export default connect(mapStateToProps)(ShopTableOrders);
