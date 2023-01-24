import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button, { ButtonSize, ButtonType } from "./button";

export default {
	title: "Button",
	component: Button,
	argTypes: {
		handleClick: { action: "handleClick" },
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => (
	<Button {...args}>Button</Button>
	// <Button {...args} />
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { size: ButtonSize.Large };

export const Primary = Template.bind({});
Primary.args = { ...Default.args, btnType: ButtonType.Primary };

export const Danger = Template.bind({});
Danger.args = { ...Default.args, btnType: ButtonType.Danger };

export const Link = Template.bind({});
Link.args = { ...Default.args, btnType: ButtonType.Link };

/* export const Primary: ComponentStory<typeof Button> = () => (
	<Button btnType={ButtonType.Primary}>Button</Button>
);
// Primary.storyName = "I am the primary";
export const Danger: ComponentStory<typeof Button> = () => (
	<Button btnType={ButtonType.Danger}>Button</Button>
);

export const Default: ComponentStory<typeof Button> = () => (
	<Button btnType={ButtonType.Default}>Button</Button>
); */
