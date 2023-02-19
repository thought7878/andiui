import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./";

const inputMeta: ComponentMeta<typeof Input> = {
	title: "input 组件",
	component: Input,
};

export default inputMeta;

export const Default: ComponentStory<typeof Input> = () => {
	return <Input />;
};
Default.storyName = "默认Input";

//
export const InputWithSize: ComponentStory<typeof Input> = () => {
	return (
		<>
			<Input inputSize="sm" />
			<Input inputSize="lg" />
		</>
	);
};
InputWithSize.storyName = "不同尺寸的Input";
