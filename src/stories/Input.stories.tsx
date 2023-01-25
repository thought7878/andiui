import React from "react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "../components/Input/input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Example/Input",
	component: Input,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Large = Template.bind({});
Large.args = {
	inputSize: "lg",
	placeholder: "large",
};
export const Small = Template.bind({});
Small.args = {
	inputSize: "sm",
	placeholder: "small",
};
export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
	placeholder: "disabled",
};
export const IconInput = Template.bind({});
IconInput.args = {
	icon: solid("download"),
	placeholder: "icon input",
};
export const Prepend = Template.bind({});
Prepend.args = {
	prepend: "https://",
	placeholder: "prepend input",
};
