import React from "react";
import styled from "styled-components";
import Title from "../../Atoms/Titles/BigTitle";
import Path from "../../Atoms/Path/Path";
const WrapperHeaderPage = styled.div`
  background-color: #f7f7f7;
  height: 500px;
  @media (max-width: ${(props) => props.theme.screens.tabletXL}) {
    height: 375px;
  }
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
const Content = styled.div`
  padding: 4em;
  h2 {
    color: #000;
    margin: 0.5em 0 0 0;
  }
`;
export default function HeaderPage({ title }) {
  return (
    <WrapperHeaderPage>
      <Content>
        <Path />
        <Title>{title} </Title>
      </Content>
    </WrapperHeaderPage>
  );
}
