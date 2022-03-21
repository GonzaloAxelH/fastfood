import React, { useState, useEffect } from "react";
import styled from "styled-components";
import P from "../../Atoms/Parrafos/P";
import FormAddReview from "../../Organims/FormAddReview/FormAddReview";
import ListReviews from "../../Organims/ListReviews/ListReviews";

const WrapperProductReviews = styled.div`
  background: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .content {
    display: flex;
  }
`;
const DescriptionProduct = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  width: 75%;
  max-width: 80%;
  margin: auto;
  padding: 60px 20px 80px 20px;
  p {
    line-height: 1.625em;
    text-align: center;
    margin: 0;
  }
`;
const SelectDescriptionReviews = styled.div`
  position: relative;
  display: flex;
  padding: 60px 0 0 0;
  transition: 0.25s all;
`;
const ReviewsProduct = styled.div`
  display: ${(props) => (props.visible ? "grid" : "none")};
  grid-template-columns: 1fr 1fr;
  padding: 2em 0 2em 0;
  min-height: 327px;
  @media (max-width: ${(props) => props.theme.screens.tabletL}) {
    grid-template-columns: 1fr;
  }
`;
const Option = styled.span`
  font-size: 1em;
  font-family: "Rubik 500";
  padding: 15px;
  margin: 0 1em;
  cursor: pointer;
  font-size: 1em;
  color: ${(props) => (props.isSelect ? "#333" : "#999")};
  position: relative;
  transition: 0.25s all;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${(props) => (props.isSelect ? "#333" : "transparent")};
    height: 2px;
    transition: 0.25s all;
  }
  &:hover {
    transition: 0.25s all;
    &:after {
      background-color: ${(props) => (props.isSelect ? "#333" : "#999999")};
    }
  }
`;
export default function ProductReviews() {
  const [toggleSelect, setToggleSelect] = useState(1);
  return (
    <WrapperProductReviews>
      <SelectDescriptionReviews>
        <Option isSelect={toggleSelect == 1} onClick={() => setToggleSelect(1)}>
          Description
        </Option>
        <Option isSelect={toggleSelect == 2} onClick={() => setToggleSelect(2)}>
          Reviews (1)
        </Option>
      </SelectDescriptionReviews>
      <div className="content">
        <ReviewsProduct visible={toggleSelect === 1}>
          <ListReviews />
          <FormAddReview />
        </ReviewsProduct>
        <DescriptionProduct visible={toggleSelect === 2}>
          <P color="#666666" size="16px">
            Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam
            nonum nibhie euismod. Facilisis at vero eros et accumsan et iusto
            odio dignissim qui blandit praesent luptatum zzril delenit augue
            duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta
            nobis eleifend option congue nihil imperdiet doming id quod mazim
            placerat facer possim assum.
          </P>
        </DescriptionProduct>
      </div>
    </WrapperProductReviews>
  );
}
