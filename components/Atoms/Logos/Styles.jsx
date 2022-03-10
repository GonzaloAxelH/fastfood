import styled from "styled-components";
export const Box = styled.div`
  width: 200px;
  background-color: #ffca3c;
  position: relative;
  height: 125px;
  .img {
    margin-top: 1em;
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
  border-top: 40px solid #ffca3c;
  border-left: 100px solid transparent;

  z-index: -1;
`;
export const BoxAfter = styled.div`
  position: absolute;

  width: 0;
  height: 0;
  top: 100%;
  right: 0;
  border-top: 40px solid #ffca3c;
  border-right: 100px solid transparent;
  z-index: -1;
`;
export const WrapperLogo = styled.div`
  position: absolute;
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
