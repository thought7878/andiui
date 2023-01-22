// Button.stories.ts|tsx

import React from "react";
// import "./_button.scss";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button, { ButtonType } from "./button";

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Button",
	component: Button,
} as ComponentMeta<typeof Button>;
export const Primary: ComponentStory<typeof Button> = () => (
	<Button btnType={ButtonType.Primary}>Button</Button>
);
// Primary.storyName = "I am the primary";
export const Danger: ComponentStory<typeof Button> = () => (
	<Button btnType={ButtonType.Danger}>Button</Button>
);

export const Default: ComponentStory<typeof Button> = () => (
	<Button btnType={ButtonType.Default}>Button</Button>
);
