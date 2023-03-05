import { ComponentMeta, ComponentStory } from "@storybook/react";
import Form from "./";

const formMeta: ComponentMeta<typeof Form> = {
	title: "Form 组件",
	component: Form,
};
export default formMeta;

//
export const FormWithDefault: ComponentStory<typeof Form> = (args) => {
	return <div className="flex w-[200px] justify-between"></div>;
};
FormWithDefault.storyName = "default";
