import React from "react";

import ItemCategoryNav from "./index";

const Template = (args) => <ItemCategoryNav {...args} />;

export const Item = Template.bind({});

Item.args = {
  primary: true,
  label: "Button",
};

const Story = {
  title: "Example/NavCategory",
  component: ItemCategoryNav,
};

export default Story;
