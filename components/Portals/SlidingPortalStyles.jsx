
import styled from "styled-components";
export const PortalWrapperAbsolute = styled.div`
  position: fixed;
  top: 0;
  min-height: 100vh;
  width: 100%;
  background-color: #fff;
 
  transform: translateY(${(props) => (props.isOpen ? "0" : "-100%")});
  -webkit-transition: all 0.25s cubic-bezier(0.77, 0, 0.175, 1);
  transition: all 0.25s cubic-bezier(0.77, 0, 0.175, 1);
  overflow: hidden;
  z-index: 21000;
`;

export const ButtonClose = styled.div`
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