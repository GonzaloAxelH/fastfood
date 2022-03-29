import styled from "styled-components";
import { BaseStylesInput } from "./InpusCrust";
import { product } from "../../Organims/FormOrderProduct/temp";
import React, { useEffect, useState } from "react";

const ExtraToppings = styled.div`
  ${BaseStylesInput};
`;

const existsObjInArr = (obj, arr) => {
  return arr.some((item) => item.name === obj.name);
};
function InputExtraToppings({ extrasOrder, getExtra }) {
  return (
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
  );
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

const CheckboxInput = ({ checked, setChecked, isChecked, setIsChecked }) => {
  return (
    <input
      type="checkbox"
      onChange={(e) => setChecked(e.target.checked)}
      checked={checked}
    />
  );
};

const CheckboxLabel = ({
  setChecked,
  children,
  checked,
  isChecked,
  setIsChecked,
}) => {
  return <label onClick={() => setChecked(!checked)}>{children}</label>;
};

export default InputExtraToppings;
