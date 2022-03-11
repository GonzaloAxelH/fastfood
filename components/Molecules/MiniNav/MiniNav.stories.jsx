import React from "react";

import MiniNav from "./MiniNav";

const Template = (args) => <MiniNav {...args} />;

export const NavMini = Template.bind({});

NavMini.args = {};

const Story = {
  title: "Example/MiniNav",
  component: MiniNav,
};

export default Story;
