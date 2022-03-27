import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../Atoms/Buttons/Button";
import { usePayment } from "./usePayment";
const FormPaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    max-width: 50%;
    width: 50%;
  }
  span {
    font-family: "Rubik 400";
    font-size: 13px;
    margin: 1em 0;
    font-style: italic;
  }
`;

const order = {
  name: "Jalapeno Angus Burger",
  description:
    "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce, tomato, house BBQ & ranch.",
  image:
    "https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/03/new-pizza1.jpg",
  quantity: 3,
  price: 8.99,
};
export default function FormPaymentDetails() {
  const [item, setItem] = useState(order);
  const { result, createCheckOutSession } = usePayment({ item });

  return (
    <FormPaymentWrapper>
      <Button submit type="primary">
        Place Order Cash
      </Button>
      <span>or</span>
      <Button submit onClick={createCheckOutSession}>
        Place Order Card
      </Button>
    </FormPaymentWrapper>
  );
}
