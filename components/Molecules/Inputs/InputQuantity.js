import styled from "styled-components";

import { product } from "../../Organims/FormProduct/FormProduct";
const Contador = styled.div`
  font-family: "Rubik 700";
  background-color: #f5f5f5;
  width: 100px;
  border-radius: 999px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    -moz-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
  }
  span:nth-child(1),
  span:nth-child(3) {
    padding: 1em;
    cursor: pointer;
  }
`;

function InputQuatity({ limit, quantity, getQuantity }) {
  const decrement = () => {
    if (quantity > 1) {
      getQuantity(quantity - 1);
    }
  };
  const increment = () => {
    if (quantity < limit) {
      getQuantity(quantity + 1);
    }
  };
  return (
    <Contador>
      <span onClick={increment}>+</span>
      <span>{quantity}</span>
      <span onClick={decrement}>-</span>
    </Contador>
  );
}

export default InputQuatity;
