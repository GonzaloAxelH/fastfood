import React from "react";

import { ItemNav } from "./index";

const Template = (args) => <ItemNav {...args} />;

export const Item = Template.bind({});

Item.args = {
  primary: true,
  label: "Button",
};

const Story = {
  title: "Example/Nav",
  component: ItemNav,
};

export default Story;
