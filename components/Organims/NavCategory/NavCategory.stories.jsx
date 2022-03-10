import React from "react";

import NavCategory from "./NavCategory";

const Template = (args) => <NavCategory {...args} />;

export const Nav1 = Template.bind({});

Nav1.args = {
  primary: true,
  label: "Button",
};

const Story = {
  title: "Example/NavCategory",
  component: NavCategory,
};

export default Story;
