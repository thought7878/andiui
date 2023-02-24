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
			<Alert closeBtn>default alert</Alert>
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
			<Alert position="left-top" closeBtn>
				left-top of viewport
			</Alert>
			<Alert position="left-bottom" closeBtn>
				left-bottom of viewport
			</Alert>
			<Alert position="right-top" closeBtn>
				right-top of viewport
			</Alert>
			<Alert position="right-bottom" closeBtn>
				right-bottom of viewport
			</Alert>
		</div>
	);
};
AlertWithPosition.storyName = "不同位置的Alert";

//
export const AlertWithAutoClose: ComponentStory<typeof Alert> = (args) => {
	return (
		<div className="m-10 w-80">
			<div className="mb-5">
				<Alert autoClose>3000 ms</Alert>
			</div>
			<div className="mb-5">
				<Alert autoClose duration={5000}>
					5000 ms
				</Alert>
			</div>
			<div className="mb-5">
				<Alert autoClose duration={8000}>
					8000 ms
				</Alert>
			</div>
		</div>
	);
};
AlertWithAutoClose.args = {
	// style: { padding: "20px 28px", borderRadius: "1.6rem" },
	// className: "px-8 py-6 ",
};

AlertWithAutoClose.storyName = "自动关闭的Alert";

//
export const AlertWithCustomClassName: ComponentStory<typeof Alert> = (
	args
) => {
	return (
		<div className="m-10 w-[500px]">
			<Alert
				className="bg-purple-500 py-6 px-8"
				// style={{ backgroundColor: "#a855f7", padding: "1.5rem 2rem" }}
			>
				custom backgroundColor & padding
			</Alert>
		</div>
	);
};
AlertWithCustomClassName.storyName = "自定义样式：className";

//
export const AlertWithCustomStyle: ComponentStory<typeof Alert> = (args) => {
	return (
		<div className="m-10 w-[500px]">
			<Alert
				// className="bg-amber-500 px-8 py-6"
				style={{ backgroundColor: "#a855f7", padding: "1.5rem 2rem" }}
			>
				custom backgroundColor & padding
			</Alert>
		</div>
	);
};
AlertWithCustomStyle.storyName = "自定义样式：style";
