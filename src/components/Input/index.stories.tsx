import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./";

const inputMeta: ComponentMeta<typeof Input> = {
	title: "input 组件",
	component: Input,
};
export default inputMeta;

//
const Template: ComponentStory<typeof Input> = (args) => {
	return (
		<div className="w-[300px]">
			<Input {...args} />
		</div>
	);
};

//
export const Default = Template.bind({});
Default.args = { inputSize: "sm" };
Default.storyName = "默认Input";

//
export const InputWithSize: ComponentStory<typeof Input> = (args) => {
	return (
		<div className="w-[300px]">
			<div className="mb-4">
				<Input inputSize="sm" {...args} />
			</div>

			<div className="mb-4">
				<Input {...args} />
			</div>

			<div className="mb-4">
				<Input inputSize="lg" {...args} />
			</div>
		</div>
	);
};
InputWithSize.storyName = "不同尺寸的Input";

//
export const InputWithDisabled = Template.bind({});
InputWithDisabled.args = { disabled: true };
InputWithDisabled.storyName = "disabled的Input";
