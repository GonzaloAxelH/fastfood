import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

import { Field, useField } from "formik";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const FormControl = styled.div`
  margin: 1em;
  display: flex;
  flex-direction: column;
  label {
    font-size: 12px;
    text-transform: uppercase;
    font-family: "Rubik 500";
    margin: 0 0 1em 0;
    display: flex;
    align-items: center;
    svg {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      fill: green;
    }
    span {
      margin-left: 3px;
    }
  }
  input,
  select {
    border: none;
    outline: none;
    background-color: #f7f7f7;
    padding: 1em;
    border-radius: 5px;
  }
`;

export default function FormBillingDetails({ propsFormik }) {
  return (
    <Wrapper>
      <FormControl>
        <label>
          FIRST NAME
          <span>
            <BsCheck2Circle />
          </span>
        </label>
        <Field name="firstName" />
      </FormControl>
      <FormControl>
        <label>
          LAST NAME
          <span>
            <BsCheck2Circle />
          </span>
        </label>
        <Field name="lastName" />
      </FormControl>
      <FormControl>
        <label>
          COUNTRY
          <span>
            <BsCheck2Circle />
          </span>
        </label>
        <CountryDropdown
          name="country"
          value={propsFormik.values.country}
          onChange={(_, e) => propsFormik.handleChange(e)}
          onBlur={propsFormik.handleBlur}
        />
      </FormControl>
      <FormControl>
        <label>
          REGION
          <span>
            <BsCheck2Circle />
          </span>
        </label>
        <RegionDropdown
          name="region"
          country={propsFormik.values.country}
          value={propsFormik.values.region}
          onChange={(_, e) => propsFormik.handleChange(e)}
          onBlur={propsFormik.handleBlur}
        />
      </FormControl>
      <FormControl>
        <label>
          STREET ADDRESS 1
          <span>
            <BsCheck2Circle />
          </span>
        </label>
        <Field name="streetAdress1" />
      </FormControl>
      <FormControl>
        <label>
          STREET ADDRESS 2
          <span>
            <BsCheck2Circle />
          </span>
        </label>
        <Field name="streetAdress2" />
      </FormControl>

      <FormControl>
        <label>
          POSTCODE
          <span>
            <BsCheck2Circle />
          </span>
        </label>
        <Field name="postcode" />
      </FormControl>
      <FormControl>
        <label>
          PHONE
          <span>
            <BsCheck2Circle />
          </span>
        </label>
        <Field name="phone" />
      </FormControl>
      <FormControl>
        <label>
          EMAIL ADDRESS
          <span>
            <BsCheck2Circle />
          </span>
        </label>
        <Field name="email" disabled={true} />
      </FormControl>
      <FormControl>
        <label>
          ORDER NOTES
          <span>
            <BsCheck2Circle />
          </span>
        </label>
        <Field name="orderNotes" />
      </FormControl>
    </Wrapper>
  );
}
