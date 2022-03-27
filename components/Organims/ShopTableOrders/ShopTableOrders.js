import React from "react";
import styled from "styled-components";
const ShopTableOrdersWrapper = styled.div``;
const TableOrder = styled.table`
  th {
    text-align: left;

    font-family: "Rubik 600";
  }
  td:nth-child(2) {
    font-family: "Rubik 400";
  }
`;
import { ordersTemp } from "./temp";
import ItemFoodCart from "../../Molecules/ItemsFood/ItemFoodCart/ItemFoodCart";

export default function ShopTableOrders() {
  return (
    <ShopTableOrdersWrapper>
      <TableOrder>
        <thead>
          <th>Product</th>
          <th>SubTotal</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <ItemFoodCart itemFood={ordersTemp.items[0]} />
            </td>
            <td>$199.95</td>
          </tr>
          <tr>
            <td>
              <ItemFoodCart itemFood={ordersTemp.items[1]} />
            </td>
            <td>$1.95</td>
          </tr>
          <tr>
            <td>
              <ItemFoodCart itemFood={ordersTemp.items[2]} />
            </td>
            <td>$5.95</td>
          </tr>
        </tbody>
      </TableOrder>
    </ShopTableOrdersWrapper>
  );
}
