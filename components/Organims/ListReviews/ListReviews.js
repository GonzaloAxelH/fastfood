import React from "react";
import P from "../../Atoms/Parrafos/P";
import ItemReview from "../../Molecules/ItemReview/ItemReview";
import { WrapperListReviews, tempReviews } from "./ListReviewsStyles";
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
