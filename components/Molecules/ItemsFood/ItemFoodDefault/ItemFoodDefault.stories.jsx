import React from "react";

import ItemFoodDefault from "./index";

const Template = (args) => <ItemFoodDefault {...args} />;

export const ItemFood = Template.bind({});

ItemFood.args = {
  type: "default",
  img: "menu-banner-deep.jpg",
  title: "Legendary deep dish",
};

const Story = {
  title: "Example/AllItemsFood",
  component: ItemFoodDefault,
};

export default Story;
