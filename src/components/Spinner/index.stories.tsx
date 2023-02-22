import { ComponentMeta, ComponentStory } from "@storybook/react";
import Spinner from "./";

const spinnerMeta: ComponentMeta<typeof Spinner> = {
	title: "Spinner 组件",
	component: Spinner,
};
export default spinnerMeta;

//
export const SpinnerWithDefault: ComponentStory<typeof Spinner> = (args) => {
	return (
		<div className="w-[500px] ">
			<Spinner />
		</div>
	);
};
SpinnerWithDefault.storyName = "默认的spinner";

//
export const SpinnerWithSize: ComponentStory<typeof Spinner> = (args) => {
	return (
		<div className="flex w-[80px] justify-between ">
			<Spinner size="sm" />
			<Spinner size="md" />
			<Spinner size="lg" />
		</div>
	);
};
SpinnerWithSize.storyName = "设置size";

//
export const SpinnerWithType: ComponentStory<typeof Spinner> = (args) => {
	return (
		<div className="flex w-[80px] justify-between ">
			<Spinner type="ring" />
			<Spinner type="dot" />
		</div>
	);
};
SpinnerWithType.storyName = "设置type";

//
export const SpinnerWithColor: ComponentStory<typeof Spinner> = (args) => {
	return (
		<div className="flex w-[80px] justify-between ">
			<Spinner />
			<Spinner color="#ec4899" />
			<Spinner color="#a855f7" />
		</div>
	);
};
SpinnerWithColor.storyName = "设置color";

//
export const SpinnerWithCustom: ComponentStory<typeof Spinner> = (args) => {
	return (
		<div className="flex w-[80px] items-center justify-between ">
			<Spinner color="#a855f7" />
			<Spinner style={{ color: "#0ea5e9", fontSize: "1.4rem" }} />
			<Spinner style={{ color: "#f97316", fontSize: "30px" }} />
		</div>
	);
};
SpinnerWithCustom.storyName = "自定义color和size";
