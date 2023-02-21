import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BiDownload } from "react-icons/bi";
import Button from "./";

const buttonMeta: ComponentMeta<typeof Button> = {
	title: "Button 组件",
	component: Button,
};
export default buttonMeta;

//
const Template: ComponentStory<typeof Button> = (args) => {
	return (
		<div className="w-[300px]">
			<Button {...args}>按钮</Button>
		</div>
	);
};

//
export const Default = Template.bind({});
Default.args = {};
Default.storyName = "默认Button";

//
export const ButtonWithType: ComponentStory<typeof Button> = (args) => {
	return (
		<div className="w-[300px]">
			<div className="mr-4 inline-block">
				<Button btnType="primary" {...args}>
					按钮
				</Button>
			</div>

			<div className="mr-4 inline-block">
				<Button {...args}>按钮</Button>
			</div>

			<div className="mr-4 inline-block">
				<Button btnType="danger" {...args}>
					按钮
				</Button>
			</div>
			<div className="mr-4 inline-block">
				<Button btnType="link" {...args}>
					按钮
				</Button>
			</div>
		</div>
	);
};
ButtonWithType.storyName = "不同类型的Button";

//
export const ButtonWithSize: ComponentStory<typeof Button> = (args) => {
	return (
		<div>
			<div className="mb-8 w-[300px]">
				<div className="mr-4 inline-block">
					<Button size="sm" btnType="primary" {...args}>
						按钮
					</Button>
				</div>

				<div className="mr-4 inline-block">
					<Button btnType="primary" {...args}>
						按钮
					</Button>
				</div>

				<div className="mr-4 inline-block">
					<Button size="lg" btnType="primary" {...args}>
						按钮
					</Button>
				</div>
			</div>
			<div className="mb-8 w-[300px]">
				<div className="mr-4 inline-block">
					<Button size="sm" {...args}>
						按钮
					</Button>
				</div>

				<div className="mr-4 inline-block">
					<Button {...args}>按钮</Button>
				</div>

				<div className="mr-4 inline-block">
					<Button size="lg" {...args}>
						按钮
					</Button>
				</div>
			</div>
			<div className="mb-8 w-[300px]">
				<div className="mr-4 inline-block">
					<Button size="sm" btnType="danger" {...args}>
						按钮
					</Button>
				</div>

				<div className="mr-4 inline-block">
					<Button btnType="danger" {...args}>
						按钮
					</Button>
				</div>

				<div className="mr-4 inline-block">
					<Button size="lg" btnType="danger" {...args}>
						按钮
					</Button>
				</div>
			</div>
			<div className="mb-8 w-[300px]">
				<div className="mr-4 inline-block">
					<Button size="sm" btnType="link" {...args}>
						按钮
					</Button>
				</div>

				<div className="mr-4 inline-block">
					<Button btnType="link" {...args}>
						按钮
					</Button>
				</div>

				<div className="mr-4 inline-block">
					<Button size="lg" btnType="link" {...args}>
						按钮
					</Button>
				</div>
			</div>
		</div>
	);
};
ButtonWithSize.storyName = "不同尺寸的Button";

//
export const ButtonWithDisabled: ComponentStory<typeof Button> = (args) => {
	return (
		<div className="w-[300px]">
			<div className="mr-4 inline-block">
				<Button btnType="link" {...args}>
					按钮
				</Button>
			</div>

			<div className="mr-4 inline-block">
				<Button btnType="primary" {...args}>
					按钮
				</Button>
			</div>
		</div>
	);
};
ButtonWithDisabled.args = { disabled: true };
ButtonWithDisabled.storyName = "disabled的Button";

//
export const ButtonWithIcon: ComponentStory<typeof Button> = (args) => {
	return (
		<div className="w-[500px]">
			<div className="mb-4">
				<Button btnType="primary">
					<BiDownload size="18px" />
				</Button>
			</div>

			<div className="mb-4 flex justify-between">
				<Button leftIcon={<BiDownload size="18px" />} btnType="primary">
					left icon
				</Button>
				<Button leftIcon={<BiDownload size="18px" />}>left icon</Button>
				<Button leftIcon={<BiDownload size="18px" />} btnType="danger">
					left icon
				</Button>
			</div>

			<div className="mb-4 flex justify-between">
				<Button rightIcon={<BiDownload size="18px" />} btnType="primary">
					right icon
				</Button>
				<Button rightIcon={<BiDownload size="18px" />}>right icon</Button>
				<Button rightIcon={<BiDownload size="18px" />} btnType="danger">
					right icon
				</Button>
			</div>

			<div className="mb-4">
				<Button
					leftIcon={<BiDownload size="18px" />}
					rightIcon={<BiDownload size="18px" />}
					btnType="primary"
				>
					left right icon
				</Button>
			</div>
			<div className="mb-4"></div>
		</div>
	);
};

ButtonWithIcon.storyName = "带Icon的Button";

//
export const ButtonWithLoading: ComponentStory<typeof Button> = (args) => {
	return (
		<div className="w-[500px]">
			<div className="mb-4 flex justify-between">
				<Button btnType="primary" loading>
					loading...
				</Button>
				<Button loading>loading...</Button>
				<Button btnType="danger" loading>
					loading...
				</Button>
			</div>
		</div>
	);
};

ButtonWithLoading.storyName = "带loading的Button";

//
//
export const ButtonWithCustom: ComponentStory<typeof Button> = (args) => {
	return (
		<div className="w-[500px]">
			<div className="mb-4 flex justify-between">
				<Button
					btnType="primary"
					style={{ padding: "20px 28px", borderRadius: "1.6rem" }}
				>
					自定义
				</Button>
				<Button style={{ padding: "20px 28px", borderRadius: "1.6rem" }}>
					自定义
				</Button>
				<Button
					btnType="danger"
					style={{ padding: "20px 28px", borderRadius: "1.6rem" }}
				>
					自定义
				</Button>
			</div>
		</div>
	);
};
ButtonWithCustom.args = {
	// style: { padding: "20px 28px", borderRadius: "1.6rem" },
	className: "px-8 py-6 ",
};

ButtonWithCustom.storyName = "自定义样式的Button";
