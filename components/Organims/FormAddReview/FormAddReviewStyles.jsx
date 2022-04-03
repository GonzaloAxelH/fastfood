import styled from "styled-components"

export const WrapperFormAddReview = styled.div`
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