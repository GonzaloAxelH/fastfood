import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { RiCloseFill } from "react-icons/ri";

import { VscChromeClose } from "react-icons/vsc";
import Portal from "./Portal";
const PortalWrapperAbsolute = styled.div`
  position: fixed;
  top: 0;
  min-height: 100vh;
  width: 100%;
  background-color: #fff;
  /*
   background-color: rgb(255, 255, 255, 0.9);
  --webkit-backdrop-filter: blur(14px);
  backdrop-filter: blur(14px);

  */
  transform: translateY(${(props) => (props.isOpen ? "0" : "-100%")});
  -webkit-transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  overflow: hidden;
  z-index: 21000;
`;

const ButtonClose = styled.div`
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 0;
  svg {
    fill: #a3a3a3;
    color: #a3a3a3;
    font-weight: 300;

    width: 40px;
    height: 40px;
  }
  padding: 1em;
  z-index: 2;
`;

const PortalSlidingContainer = ({ isOpen, setIsOpen, children }) => {
  useEffect(() => {
    const body = document.getElementById("body");
    setTimeout(() => {
      body.style.overflowY = isOpen ? "hidden" : "auto";
    }, 250);
  }, [isOpen]);
  return (
    <Portal>
      <PortalWrapperAbsolute isOpen={isOpen}>
        <ButtonClose onClick={() => setIsOpen(false)}>
          <VscChromeClose />
        </ButtonClose>
        {children}
      </PortalWrapperAbsolute>
    </Portal>
  );
};

export default PortalSlidingContainer;
