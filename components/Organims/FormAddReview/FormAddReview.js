import React from "react";
import styled from "styled-components";
import ReactStars from "react-stars";
import Button from "../../Atoms/Buttons/Button";
const WrapperFormAddReview = styled.div`
  padding: 0 30px;
  textarea {
    background-color: #0000000d;
    border-radius: 6px;
    border: none;
    color: #333;
    font-size: 14px;
    width: 100%;
    resize: none;
    outline: none;
    padding: 1em;
    font-family: "Rubik 400";
  }
  p {
    font-size: 12px;
    font-family: "Rubik 500";
  }
  p:nth-child(1) {
    font-size: 18px;
  }
  .stars {
    display: flex;
    align-items: center;
    .raiting {
      margin-left: 0.3em;
      margin-top: 0.4em;
      font-size: 14px;
      font-family: "Rubik 500";
    }
  }
  form {
    button {
      margin: 1em 0;
      width: 30%;
    }
  }

  @media (max-width: ${(props) => props.theme.screens.tabletL}) {
    form {
      button {
        width: 100%;
        padding: 1.5em;
      }
    }
  }
`;
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

          <span className="raiting">{`${raiting}/5`}</span>
        </div>

        <p>YOU REVIEW</p>
        <textarea rows="10"></textarea>

        <Button label="Enviar" type="default" submit={true} />
      </form>
    </WrapperFormAddReview>
  );
}
