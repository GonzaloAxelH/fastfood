import React from "react";
import styled from "styled-components";
import { BaseStylesInput } from "./InpusCrust";
import { connect } from "react-redux";
const ExtraToppings = styled.div`
  ${BaseStylesInput};
`;

const existsObjInArr = (obj, arr) => {
  return arr.some((item) => item.name === obj.name);
};
function InputExtraToppings({ extrasOrder, getExtra, product }) {
  return product.extras ? (
    <ExtraToppings>
      <p className="title-abs">EXTRA TOPPINGS</p>
      <div className="inputs-checkbox">
        {product.extras.map((extraToppingItem, index) => {
          let isChecked = existsObjInArr(extraToppingItem, extrasOrder);
          return (
            <Checkbox
              key={index}
              isChecked={isChecked}
              setIsChecked={(check) => getExtra(extraToppingItem, check)}
            >
              <div className="option-checkbox">
                <CheckboxInput
                  checked={isChecked}
                  setChecked={(check) => getExtra(extraToppingItem, check)}
                />
                <CheckboxLabel
                  checked={isChecked}
                  setChecked={(check) => getExtra(extraToppingItem, check)}
                >
                  <span>
                    {extraToppingItem.name} {extraToppingItem.price}
                  </span>
                </CheckboxLabel>
              </div>
            </Checkbox>
          );
        })}
      </div>
    </ExtraToppings>
  ) : null;
}

const Checkbox = ({ isChecked, setIsChecked, children }) => {
  const allChildren = React.Children.map(children, (child) => {
    const propsParaPasar = {
      isChecked,
      setIsChecked,
    };
    const clone = React.cloneElement(child, propsParaPasar);
    return clone;
  });
  return allChildren;
};

const CheckboxInput = ({ checked, setChecked }) => {
  return (
    <input
      type="checkbox"
      onChange={(e) => setChecked(e.target.checked)}
      checked={checked}
    />
  );
};

const CheckboxLabel = ({ setChecked, children, checked }) => {
  return <label onClick={() => setChecked(!checked)}>{children}</label>;
};

const mapStateToProps = (state) => {
  return {
    product: state.products.product,
  };
};

export default connect(mapStateToProps)(InputExtraToppings);
