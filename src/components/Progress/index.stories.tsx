import { ComponentMeta, ComponentStory } from "@storybook/react";
import Progress from "./";

const progressMeta: ComponentMeta<typeof Progress> = {
	title: "Progress 组件",
	component: Progress,
};
export default progressMeta;

//
export const ProgressWithDefault: ComponentStory<typeof Progress> = (args) => {
	return (
		<div className="w-[500px] ">
			<Progress progress={80} />
		</div>
	);
};
ProgressWithDefault.storyName = "设置progress和children";

//
export const ProgressWithCustom: ComponentStory<typeof Progress> = (args) => {
	return (
		<div className="w-[500px] ">
			<Progress
				progress={20}
				wrapperClass="bg-yellow-500 h-[12px]"
				innerClass="bg-Purple-500"
			/>
		</div>
	);
};
ProgressWithCustom.storyName = "设置size";
