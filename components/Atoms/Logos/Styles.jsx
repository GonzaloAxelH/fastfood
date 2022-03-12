import styled from "styled-components";
export const WrapperLogo = styled.div`
  position: absolute;
  width: 200px;

  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -4%;
    width: 0;
    height: 0;
    border-bottom: 8px solid #ffca3c;
    border-left: 8px solid transparent;
    -webkit-filter: brightness(66%);
    filter: brightness(66%);
    z-index: 1;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: -4%;
    width: 0;
    height: 0;
    border-bottom: 8px solid #ffca3c;
    border-right: 8px solid transparent;
    -webkit-filter: brightness(66%);
    filter: brightness(66%);

    z-index: 1;
  }
`;

export const Box = styled.div`
  height: ${(props) => (props.offset == 0 ? "125px" : "95px")};
  transition: 0.25s all;
  background-color: #ffca3c;
  position: relative;
  .img {
    position: relative;
    margin-top: 1em;
    object-fit: contain;
    transition: 0.25s all;
    width: ${(props) => (props.offset == 0 ? "110px" : "80px")};
    height: ${(props) => (props.offset == 0 ? "110px" : "80px")};
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const BoxBefore = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  top: 100%;
  left: 0;
  border-top: ${(props) => (props.offset == 0 ? "40px" : "27px")} solid #ffca3c;
  border-left: 100px solid transparent;
  transition: 0.25s all;
  z-index: -1;
`;
export const BoxAfter = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  top: 100%;
  right: 0;
  border-top: ${(props) => (props.offset == 0 ? "40px" : "27px")} solid #ffca3c;
  transition: 0.25s all;
  border-right: 100px solid transparent;
  z-index: -1;
`;
