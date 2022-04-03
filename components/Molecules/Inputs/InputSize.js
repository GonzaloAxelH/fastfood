import styled from "styled-components";

import { connect } from "react-redux";
const InputSelectSize = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0 2em 1em;
  p {
    padding: 0 2em 0 0;
    color: #333;
    font-size: 12px;
    font-family: "Rubik 500";
    text-transform: uppercase;
  }
  .sizes-list {
    display: flex;
    margin-left: 3em;
  }
`;

const Size = styled.span`
  padding: 0.9em;
  cursor: pointer;
  border-radius: 5px;
  margin: 0.2em;
  sup {
    margin-left: -5px;
  }
  color: ${(props) => (props.isSelect ? "#fff" : "#000")};
  font-size: 13px;
  font-family: "Rubik 400";
  background-color: ${(props) => (props.isSelect ? "#f2002d" : "#f8f8f8")};
  &:hover {
    background-color: ${(props) => (props.isSelect ? "#f2002d" : "#f8f8f8")};
  }
  transition: 0.2s all;
`;
function InputSize({ getSize, size, product }) {
  return product.sizes ? (
    <InputSelectSize>
      <p>SIZE</p>
      <div className="sizes-list">
        {product.sizes.map((tam, index) => {
          return (
            <Size
              key={index}
              isSelect={tam.medida === size.medida}
              onClick={() => getSize(tam)}
            >
              {tam.medida} <sup>{`"`}</sup>
            </Size>
          );
        })}
      </div>
    </InputSelectSize>
  ) : null;
}
const mapStateToProps = (state) => {
  return {
    product: state.products.product,
  };
};

export default connect(mapStateToProps)(InputSize);
