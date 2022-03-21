import React from "react";

import styled from "styled-components";
import P from "../../Atoms/Parrafos/P";
import ItemReview from "../../Molecules/ItemReview/ItemReview";
const WrapperListReviews = styled.div`
  padding: 0 5em;
  border-right: 2px solid #e6e6e6;

  @media (max-width: ${(props) => props.theme.screens.desktop}) {
    padding: 0 1em;
    .title {
      font-size: 18px;
      text-align: center;
    }
  }
  @media (max-width: ${(props) => props.theme.screens.tabletL}) {
    border-right: 0px solid #e6e6e6;
    .title {
      font-size: 18px;
      text-align: center;
    }
  }
  display: flex;
  flex-direction: column;
  .title {
    font-size: 22px;
    font-family: "Rubik 600";
  }

  .list {
    display: flex;
    flex-direction: column;
    margin: 1em;
  }
`;

const tempReviews = [
  {
    user: {
      name: "Althemist",
      imgUser:
        "https://secure.gravatar.com/avatar/6a459c02734d98bdfe3d91ca463d9cd4?s=60&d=mm&r=g",
    },
    rainting: 5,
    description:
      "The Lafka is, in fact, the burger king when it comes to offering the best food of its kind in Melbourne.",
    date: "Mar 20, 2022",
    product: {
      name: "Big Brekkie BBQ Burger",
    },
  },
  {
    user: {
      name: "Althemist",
      imgUser:
        "https://secure.gravatar.com/avatar/6a459c02734d98bdfe3d91ca463d9cd4?s=60&d=mm&r=g",
    },
    rainting: 5,
    description:
      "The Lafka is, in fact, the burger king when it comes to offering the best food of its kind in Melbourne.",
    date: "Mar 20, 2022",
    product: {
      name: "Big Brekkie BBQ Burger",
    },
  },
  {
    user: {
      name: "Althemist",
      imgUser:
        "https://secure.gravatar.com/avatar/6a459c02734d98bdfe3d91ca463d9cd4?s=60&d=mm&r=g",
    },
    rainting: 5,
    description:
      "The Lafka is, in fact, the burger king when it comes to offering the best food of its kind in Melbourne.",
    date: "Mar 20, 2022",
    product: {
      name: "Big Brekkie BBQ Burger",
    },
  },
];

export default function ListReviews() {
  return (
    <WrapperListReviews>
      <p className="title">
        {tempReviews.length == 0
          ? "Reviews"
          : ` ${tempReviews.length} review for Big Brekkie BBQ Burger`}
      </p>
      <div className="list">
        {tempReviews.length == 0 && <P>There are no reviews yet.</P>}
        {tempReviews.length !== 0 && (
          <>
            {tempReviews.map((review, index) => {
              return <ItemReview key={index} review={review} />;
            })}
          </>
        )}
      </div>
    </WrapperListReviews>
  );
}
