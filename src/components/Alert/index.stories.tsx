import { ComponentMeta, ComponentStory } from "@storybook/react";
import Alert from "./";

const alertMeta: ComponentMeta<typeof Alert> = {
	title: "Alert 组件",
	component: Alert,
};
export default alertMeta;

//
const Template: ComponentStory<typeof Alert> = (args) => {
	return (
		<div className="m-10 w-80">
			<div className="mb-5">
				<Alert closeBtn>default alert</Alert>
			</div>
		</div>
	);
};

//
export const Default = Template.bind({});
Default.args = {};
Default.storyName = "默认Alert";

//
export const AlertWithType: ComponentStory<typeof Alert> = (args) => {
	return (
		<div className="m-10 w-80">
			<div className="mb-5">
				<Alert type="primary" closeBtn>
					primary alert
				</Alert>
			</div>
			<div className="mb-5">
				<Alert type="success" closeBtn>
					success alert
				</Alert>
			</div>
			<div className="mb-5">
				<Alert type="danger" closeBtn>
					danger alert
				</Alert>
			</div>
			<div className="mb-5">
				<Alert type="warning" closeBtn>
					warning alert
				</Alert>
			</div>
		</div>
	);
};
AlertWithType.storyName = "不同类型的Alert";

//
export const AlertWithPosition: ComponentStory<typeof Alert> = (args) => {
	return (
		<div className="m-10 w-80">
			<div className="mb-5">
				<Alert position="left-top" closeBtn>
					left-top alert
				</Alert>
				<Alert position="left-bottom" closeBtn>
					left-top alert
				</Alert>
				<Alert position="right-top" closeBtn>
					left-top alert
				</Alert>
				<Alert position="right-bottom" closeBtn>
					left-top alert
				</Alert>
			</div>
		</div>
	);
};
AlertWithPosition.storyName = "不同位置的Alert";

//
//
export const AlertWithCustom: ComponentStory<typeof Alert> = (args) => {
	return (
		<div className="m-10 w-80">
			<div className="mb-5">
				<Alert
					className="bg-amber-500!"
					style={{ backgroundColor: "#a855f7" }}
					closeBtn
				>
					left-top alert
				</Alert>
			</div>
		</div>
	);
};
AlertWithCustom.args = {
	// style: { padding: "20px 28px", borderRadius: "1.6rem" },
	className: "px-8 py-6 ",
};

AlertWithCustom.storyName = "自定义样式的Alert";
