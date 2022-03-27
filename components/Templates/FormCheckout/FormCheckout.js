import React from "react";
import styled from "styled-components";
import FormBillingDetails from "../../Organims/FormBillingDetails/FormBillingDetails";
import FormPaymentDetails from "../../Organims/FormPaymentDetails/FormPaymentDetails";
import ShopTableOrders from "../../Organims/ShopTableOrders/ShopTableOrders";
import { Formik, Form } from "formik";

import { initialValues } from "./FormUtils";

const FormWrapper = styled.div`
  padding: 30px;
  form {
    display: grid;
    grid-template-columns: 3fr 2fr;
    justify-content: center;
    @media (max-width: ${(props) => props.theme.screens.tabletL}) {
      grid-template-columns: 1fr;
    }
    width: 100%;
  }
`;

export default function FormCheckout() {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <FormWrapper>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(propsFormik) => {
          return (
            <Form>
              <div>
                <FormBillingDetails propsFormik={propsFormik} />
              </div>
              <div>
                <ShopTableOrders />
                <FormPaymentDetails propsFormik={propsFormik} />
              </div>
            </Form>
          );
        }}
      </Formik>
    </FormWrapper>
  );
}
