import styled from "styled-components";
export const WrapperForm = styled.div``;

export const Price = styled.div`
  padding: 0.5em 0 0 0;
  margin: 0.5em 0;
  background-color: #fff;
  border-radius: 12px;
  font-size: 30px;
  font-family: "Rubik 700";
  &:before {
    content: "$";
    font-size: 24px;
  }
  sup {
    font-size: 20px;
  }
`;
export const FormBottom = styled.div`
  display: flex;
  width: 100%;
  button {
    width: 200px;
    margin: 0 1em;
  }
`;


export const AllPricesOrder = styled.div`
  background-color: #fafafafa;
  width: 100%;
  padding: 20px 25px;
  border: 2px solid #f1f1f1;
  border-radius: 8px;
  position: relative;
  margin-bottom: 20px;
  width: 100%;
  hr {
    background-color: #f0f0f0;
    height: 1px;
    border: 0;
  }
  p {
    color: #666666;
    margin: 0;
    padding-bottom: 0.7em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 100%;
    font-size: 14px;
    font-family: "Rubik 500";
  }
  span {
    color: #333;
    font-size: 16px;
    font-family: "Rubik 700";
    text-align: center;
    justify-self: flex-start;
  }

  span:before {
    content: "$";
    font-size: 11px;
  }
`;
