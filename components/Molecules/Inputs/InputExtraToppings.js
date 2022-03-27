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
            <Checkbox isChecked={isChecked} key={index}>
              <label className="option-checkbox">
                <CheckboxInput
                  checked={isChecked}
                  setChecked={(isChecked) =>
                    getExtra(extraToppingItem, isChecked)
                  }
                  extrasOrder={extrasOrder}
                />
                <Text
                  extrasOrder={extrasOrder}
                  checked={isChecked}
                  setChecked={(isChecked) =>
                    getExtra(extraToppingItem, isChecked)
                  }
                >
                  <span>
                    {extraToppingItem.name} {extraToppingItem.price}
                  </span>
                </Text>
              </label>
            </Checkbox>
          );
        })}
      </div>
    </ExtraToppings>
  );
}

const Checkbox = ({ isChecked, children }) => {
  const [checked, setChecked] = useState(isChecked);
  const allChildren = React.Children.map(children, (child) => {
    const propsParaPasar = {
      checked,
      setChecked,
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
      onChange={(e) => setChecked(!checked)}
      checked={checked}
    />
  );
};

const Text = ({ setChecked, children, checked }) => {
  return <div onClick={() => setChecked(checked)}>{children}</div>;
};

export default InputExtraToppings;
