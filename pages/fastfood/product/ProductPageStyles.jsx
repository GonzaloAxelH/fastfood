import styled from "styled-components";
export const WrapperPage = styled.div`
  padding: 300px 0 0 0;

  @media (max-width: ${(props) => props.theme.screens.tabletXL}) {
    padding: 200px 0 0 0;
  }
  .center {
    text-align: center;
  }
`;
export const ProductNotExiste = styled.div`
  height: 50vh;
  width: 100%;
  overflow: hidden;

  position: relative;
`;
export const LoaderWrapper = styled.div`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 10px;
  background: #3498db;
  border-radius: 5px;
  animation: load 1.8s ease-in-out infinite;
  &:before,
  &:after {
    position: absolute;
    display: block;
    content: "";
    animation: load 1.8s ease-in-out infinite;
    height: 10px;
    border-radius: 5px;
  }

  &:before {
    top: -20px;
    left: 10px;
    width: 40px;
    background: #ef4836;
  }

  &:after {
    bottom: -20px;
    width: 35px;
    background: #f5ab35;
  }

  @keyframes load {
    0% {
      transform: translateX(40px);
    }

    50% {
      transform: translateX(-30px);
    }

    100% {
      transform: translateX(40px);
    }
  }
`;
