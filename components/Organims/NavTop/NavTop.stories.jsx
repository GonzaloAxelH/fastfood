import React from "react";
import NavTop from "./NavTop";

const Template = (args) => <NavTop {...args} />;

export const NavTop1 = Template.bind({});

const Story = {
  title: "Example/Nav",
  component: NavTop,
};

export default Story;
