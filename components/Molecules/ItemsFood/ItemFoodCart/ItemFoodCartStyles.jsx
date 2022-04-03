import styled from 'styled-components';
export const ItemFoodCartContainer = styled.div`
  display: flex;
  a {
    text-decoration: none;
  }
  padding: 10px;
  
  justify-content: space-between;
`;
export const InfoProduct = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 1em;
  align-items: flex-start;
  .name-product {
    font-size: 14px;
    font-family: "Rubik 500";
    color: #333333;
    margin: 0.5em 0;
  }
`;
export const ImageProduct = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  
`;
export const ListOptions = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  p {
    font-size: 11px;
    font-family: "Rubik 400";
    color: #888888;
    margin: 0;
    span {
      margin-left: 4px;
    }
    span::before {
      content: "$";
      font-size: 10px;
    }
  }
  .option-bold {
    font-family: "Rubik 400";
    color: #333;
    margin: 0.2em 0;
  }
`;
export const Prices = styled.div`
  font-size: 14px;
  font-family: "Rubik 500";
  color: #f2002d;
  margin: 0.5em 0;
  span:before {
    content: "$";
    font-size: 11px;
  }
`;

