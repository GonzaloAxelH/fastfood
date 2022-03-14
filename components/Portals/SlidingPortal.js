import { useEffect, useState } from "react";
import styled from "styled-components";
import { RiCloseFill } from "react-icons/ri";
import Portal from "./Portal";
const PortalWrapperAbsolute = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;

  background-color: rgb(255, 255, 255, 0.8);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  transform: translateY(${(props) => (props.isOpen ? "0" : "-100%")});
  -webkit-transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 21000;
  button {
    position: absolute;
    right: 0;
    top: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    svg {
      width: 40px;
      height: 40px;
      fill: gray;
    }
  }
`;

const PortalSlidingContainer = ({ isOpen, handleClose, children }) => {
  return (
    <Portal>
      <PortalWrapperAbsolute isOpen={isOpen}>
        <button onClick={handleClose}>
          <RiCloseFill />
        </button>
        {children}
      </PortalWrapperAbsolute>
    </Portal>
  );
};

export default PortalSlidingContainer;
