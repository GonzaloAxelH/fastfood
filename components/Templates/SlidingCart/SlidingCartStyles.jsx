import styled from 'styled-components';

export const CartWrapper = styled.div`
  margin: auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  width: calc(100% - 40px);
  max-width: 600px;
  -webkit-transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
`;
export const CartContent = styled.div`
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
  border-top: 1px solid #f1f1f1;
  height: 55vh;
  overflow-y: auto;
  margin-top: 3em;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar:vertical {
    width: 8px;
  }

  &::-webkit-scrollbar-button:increment,
  &::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar:horizontal {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 20px;
    border: 2px solid #f1f2f3;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;
export const CartButtons = styled.div`
  width: 100%;
  display: flex;

  button {
    margin: 0 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  a {
    width: 100%;
  }
  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

export const CartAmmount = styled.div`
  margin-bottom: 3em;
  align-self: flex-start;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  padding: 0 1em;
  span {
    color: #333;
    font-size: 17px;

    font-family: "Rubik 600";
  }
  p {
    color: #888888;
    font-size: 17px;
    font-family: "Rubik 400";
  }
`;
export const CartPriceTotal = styled.div``;