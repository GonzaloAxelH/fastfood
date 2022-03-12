import React from "react";
import styled from "styled-components";

import { BiPhoneCall } from "react-icons/bi";
const PhoneWrapper = styled.div`
  cursor: pointer;
  font-family: "Rubik 400";
  background-color: #fff;
  border-radius: 99px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 190px;
  height: 48px;
  justify-content: center;
  padding: 6px 11px 6px 5px;
  box-shadow: 0 0 30px rgb(0 0 0 / 12%);
  -moz-box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 0 30px 0 rgb(0 0 0 / 12%);
  p {
    font-size: 13px;
    color: #4b4b4b;
    margin: 0;
  }
  span {
    color: #4b4b4b;
    font-family: "Rubik 700";
    font-size: 16px;
  }

  @media (max-width: 768px) {
  }

  @media (max-width: ${(props) => props.theme.screens.tabletL}) {
    width: 48px;
    height: 48px;
    padding: 11px;
    position: absolute;
    right: 1em;
    bottom: -65vh;
    z-index: 9999;
    p {
      display: none;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        display: none;
      }
    }
  }
`;

export default function PhoneNav() {
  return (
    <PhoneWrapper onClick={() => alert("call direction")}>
      <p>Order Online or Call Now</p>
      <div>
        <BiPhoneCall />
        <span>+555 234 766</span>
      </div>
    </PhoneWrapper>
  );
}
