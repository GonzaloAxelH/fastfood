import styled from "styled-components";
import { BaseStylesInput } from "./InpusCrust";
import { product } from "../../Organims/FormOrderProduct/FormOrderProduct";
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
        {product.extras.map((ext, index) => {
          return (
            <Checkbox isChecked={existsObjInArr(ext, extrasOrder)} key={index}>
              <label className="option-checkbox">
                <CheckboxInput
                  ext={ext}
                  checked={existsObjInArr(ext, extrasOrder)}
                  setChecked={(ext, isChecked) => getExtra(ext, isChecked)}
                  extrasOrder={extrasOrder}
                />
                <Text
                  extrasOrder={extrasOrder}
                  ext={ext}
                  setChecked={(ext, isChecked) => getExtra(ext, isChecked)}
                >
                  <span>
                    {ext.name} {ext.price}
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

const CheckboxInput = ({ checked, setChecked, ext, extrasOrder }) => {
  return (
    <input
      type="checkbox"
      onChange={(e) => setChecked(ext, !existsObjInArr(ext, extrasOrder))}
      checked={checked}
    />
  );
};

const Text = ({ setChecked, children, ext, extrasOrder }) => {
  return (
    <div onClick={() => setChecked(ext, existsObjInArr(ext, extrasOrder))}>
      {children}
    </div>
  );
};

export default InputExtraToppings;
