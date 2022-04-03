import React from "react";
import ReactStars from "react-stars";
import Button from "../../Atoms/Buttons/Button";
import { WrapperFormAddReview } from "./FormAddReviewStyles";
export default function FormAddReview() {
  const [raiting, setRaiting] = React.useState(0);
  const ratingChanged = (newRating) => {
    console.log(newRating);
    setRaiting(newRating);
  };

  return (
    <WrapperFormAddReview>
      <form onSubmit={(e) => e.preventDefault()}>
        <p>Add a review</p>
        <p>YOUR RAITING</p>
        <div className="stars">
          <ReactStars
            value={parseFloat(raiting)}
            onChange={ratingChanged}
            size={24}
            color2={"#ffd700"}
          />

          <span className="raiting star">{`${raiting}/5`}</span>
        </div>

        <p>YOU REVIEW</p>
        <textarea rows="10"></textarea>

        <Button label="Enviar" type="default" submit={true} />
      </form>
    </WrapperFormAddReview>
  );
}
