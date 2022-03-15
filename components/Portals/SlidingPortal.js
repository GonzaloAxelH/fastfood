import { useEffect, useState } from "react";
import styled from "styled-components";
import { RiCloseFill } from "react-icons/ri";

import { VscChromeClose } from "react-icons/vsc";
import Portal from "./Portal";
const PortalWrapperAbsolute = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  padding: 0 20px 40px;
  background-color: #fff;
  transform: translateY(${(props) => (props.isOpen ? "0" : "-100%")});
  -webkit-transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 21000;
  .button-close {
    position: absolute;
    display: block;
    right: 0;
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
    background-color: transparent;
    color: #fff;
    font-size: 0;
    vertical-align: middle;
    text-align: center;
    text-decoration: none !important;
    overflow: hidden;

    cursor: pointer;
    -webkit-transition: all 0.4s ease 0s;
    transition: all 0.4s ease 0s;
    opacity: 0.6;
    z-index: 9999999;
  }
  .button-close::after {
    display: block;

    width: 40px;
    height: 2px;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -1px 0 0 -20px;
    border-bottom: 2px solid #333;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .button-close::before {
    display: block;
    width: 40px;
    height: 2px;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -1px 0 0 -20px;
    border-bottom: 2px solid #333;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  .button-close2 {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    svg {
      fill: #a3a3a3;
      color: #a3a3a3;
      font-weight: 300;

      width: 40px;
      height: 40px;
    }
    padding: 1em;
  }
`;

const PortalSlidingContainer = ({ isOpen, handleClose, children }) => {
  return (
    <Portal>
      <PortalWrapperAbsolute isOpen={isOpen}>
        <div className="button-close2" onClick={handleClose}>
          <VscChromeClose />
        </div>
        {children}
      </PortalWrapperAbsolute>
    </Portal>
  );
};

export default PortalSlidingContainer;
