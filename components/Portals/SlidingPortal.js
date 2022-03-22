import { useEffect, useState, useContext } from "react";
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
  overflow: hidden;
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

const PortalSlidingContainer = ({ isOpen, setIsOpen, children }) => {
  return (
    <Portal>
      <PortalWrapperAbsolute isOpen={isOpen}>
        <div className="button-close2" onClick={() => setIsOpen(false)}>
          <VscChromeClose />
        </div>
        {children}
      </PortalWrapperAbsolute>
    </Portal>
  );
};

export default PortalSlidingContainer;
