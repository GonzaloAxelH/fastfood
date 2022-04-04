import styled from "styled-components";

export const WrapperCartPage = styled.div`
  min-height: 100vh;
`;
export const RowItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 2fr;
  justify-content: space-between;
  align-items: center;
  span:nth-child(1) {
    margin: auto;
  }

  span:nth-child(2) {
    width: 80%;
  }
`;
export const ListItemsCart = styled.div``;
export const CartTotals = styled.div``;
export const Contenido = styled.div`
  display: grid;
  grid-template-columns: 6fr 2fr;
`;