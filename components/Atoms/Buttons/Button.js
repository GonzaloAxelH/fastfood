import React from "react";
import BtnPrimary from "./BtnPrimary/BtnPrimary";
import BtnDefault from "./BtnDefault/BtnDefault";
import BtnOrder from "./ButtonOrder/ButtonOrder";

const TYPE = {
  DEFAULT: "default",
  PRIMARY: "primary",
  ORDER: "order",
};

export default function Btn({ type, ...props }) {
  switch (type) {
    case TYPE.PRIMARY:
      return <BtnPrimary {...props} />;
    case TYPE.ORDER:
      return <BtnOrder {...props} />;
    default:
      return <BtnDefault {...props} />;
  }
}
