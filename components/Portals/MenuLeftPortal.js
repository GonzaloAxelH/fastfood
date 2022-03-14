import { useEffect, useState } from "react";
import styled from "styled-components";
import { RiCloseFill } from "react-icons/ri";
import Portal from "./Portal";
const PortalWrapperAbsolute = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;

  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  -webkit-transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  z-index: ${(props) => (props.isOpen ? "21000" : "-21000")};
`;
const CloseArea = styled.div`
  width: 100%;
`;
const AreaMenu = styled.div`
  position: relative;
  background-color: #222222;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
  -webkit-transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  button {
    position: absolute;
    right: 0;
    top: 0;
    padding: 1em;
    background-color: transparent;
    border: none;
    cursor: pointer;
    svg {
      width: 40px;
      height: 40px;
      fill: #fff;
    }
    z-index: 21000;
  }
`;
const PortalMenuLeft = ({ isOpen, handleClose, children }) => {
  return (
    <Portal>
      <PortalWrapperAbsolute isOpen={isOpen}>
        <AreaMenu isOpen={isOpen}>
          <button onClick={handleClose}>
            <RiCloseFill />
          </button>
          {children}
        </AreaMenu>
        <CloseArea onClick={handleClose}></CloseArea>
      </PortalWrapperAbsolute>
    </Portal>
  );
};

export default PortalMenuLeft;
