import React from "react";
import styled from "styled-components";
import FormBillingDetails from "../../Organims/FormBillingDetails/FormBillingDetails";
import FormPaymentDetails from "../../Organims/FormPaymentDetails/FormPaymentDetails";
import ShopTableOrders from "../../Organims/ShopTableOrders/ShopTableOrders";
import { Formik, Form, useField } from "formik";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { initialValues, SignupSchema } from "./FormUtils";

const FormWrapper = styled.div`
  padding: 30px;
  form {
    display: grid;
    grid-template-columns: 3fr 2fr;
    width: 100%;
  }
`;

export default function FormCheckout() {
  console.log(CountryRegionData);
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
