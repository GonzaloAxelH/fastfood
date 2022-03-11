import React from "react";

import BtnDefault from "./index";

const Template = (args) => <BtnDefault {...args} />;

export const BtnDef = Template.bind({});

BtnDef.args = {
  type: "default",
  label: "BUILD YOUR BURGUER",
};

const Story = {
  title: "Example/Buttons",
  component: BtnDefault,
};

export default Story;
