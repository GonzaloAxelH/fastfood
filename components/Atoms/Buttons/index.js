import React from "react";
import BtnDefault from "./BtnDefault";

const TYPE = {
  DEFAULT: "default",
};

export default function Btn({ type, ...props }) {
  switch (type) {
    case TYPE.DEFAULT:
      return <BtnDefault {...props} />;
    default:
      return <BtnDefault {...props} />;
  }
}
