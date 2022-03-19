import React from "react";
import Path from "../../../components/Atoms/Path/Path";
import Layout from "../../../Layouts/Layout";
import styled from "styled-components";
const WrapperPage = styled.div`
  padding: 300px 40px 40px;
`;
export default function CategoryProducts() {
  return (
    <Layout>
      <WrapperPage>
        <Path />
      </WrapperPage>
    </Layout>
  );
}
