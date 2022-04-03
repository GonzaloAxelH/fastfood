import React from "react";
import Image from "next/image";
import styled from "styled-components";
import P from "../../Atoms/Parrafos/P";
const ItemReviewWrapper = styled.div`
  position: relative;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  z-index: 1;
  padding: 22px 30px;
  margin: 2em 0;
  border-radius: 8px;
  box-shadow: -5px 13px 27px -6px rgba(0, 0, 0, 0.14);
  -webkit-box-shadow: -5px 13px 27px -6px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: -5px 13px 27px -6px rgba(0, 0, 0, 0.14);
`;
const InfoUser = styled.div`
  display: flex;
  align-items: center;
  p:nth-child(1) {
    color: #333;
    font-size: 15px;
    font-family: "Rubik 500";
  }
  p:nth-child(3),
  span {
    color: #999;
    font-size: 13px;
    font-family: "Rubik 400";
  }
  span {
    margin: 0 8px;
  }
`;
const ImageUserWrapper = styled.div`
  position: absolute;
  top: -2em;
  left: 2em;
  background: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  img {
    border-radius: 50%;
  }
  z-index: 2;
`;
export default function ItemReview({ review }) {
  return (
    <ItemReviewWrapper>
      <ImageUserWrapper>
        <Image
          src={review.user.imgUser}
          width={50}
          height={50}
          alt={review.user.name}
        />
      </ImageUserWrapper>
      <InfoUser>
        <p>{review.user.name}</p>
        <span>|</span>
        <p>{review.date}</p>
      </InfoUser>
      <P style={{ fontStyle: "italic" }} size="15px" color="#666666">
        {review.description}
      </P>
    </ItemReviewWrapper>
  );
}

class Roee {
  component() {
    this.state = { count: 0 };
  }
  render() {
    return <div></div>;
  }
}
