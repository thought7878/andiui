import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";
import { BsApple, BsTwitter } from "react-icons/bs";
import Icon from "./";

const iconMeta: ComponentMeta<typeof Icon> = {
	title: "Icon 组件",
	component: Icon,
};
export default iconMeta;

//
export const IconWithDefault: ComponentStory<typeof Icon> = (args) => {
	return (
		<div className="flex w-[200px] justify-between">
			<Icon icon={<BiDownload />} />
			<Icon icon={<AiOutlineInfoCircle />} />
			<Icon>
				<BsTwitter />
			</Icon>
			<Icon>
				<BsApple />
			</Icon>
		</div>
	);
};
IconWithDefault.storyName = "设置icon和children";

//
export const IconWithCustomColor: ComponentStory<typeof Icon> = (args) => {
	return (
		<div className="flex w-[200px] justify-between">
			<Icon icon={<BiDownload color="#8b5cf6" />} />
			<Icon icon={<BiDownload color="rgb(0, 255, 0)" />} />
			<Icon icon={<BiDownload color="hsl(30, 100%, 50%)" />} />
			<Icon icon={<BiDownload color="hsla(30, 100%, 50%, .3)" />} />
		</div>
	);
};
IconWithCustomColor.storyName = "设置color";

//
export const IconWithCustomSize: ComponentStory<typeof Icon> = (args) => {
	return (
		<div className="flex w-[200px] items-center justify-between">
			<Icon icon={<BiDownload size="16px" />} />
			<Icon icon={<BiDownload size="1.5rem" />} />
			<Icon icon={<BiDownload size="2em" />} />
		</div>
	);
};
IconWithCustomSize.storyName = "设置size";

//
export const IconWithCustomStyle: ComponentStory<typeof Icon> = (args) => {
	return (
		<div className="flex w-[200px] items-center justify-between">
			<Icon icon={<BiDownload size="28px" color="#8b5cf6" />} />
			<Icon
				icon={<BiDownload style={{ fontSize: "28px", color: "#8b5cf6" }} />}
			/>

			<Icon
				icon={<BiDownload style={{ fontSize: "28px", color: "#84cc16" }} />}
			/>
		</div>
	);
};
IconWithCustomStyle.storyName = "设置style";

//
export const IconWithCustomClass: ComponentStory<typeof Icon> = (args) => {
	return (
		<div className="flex w-[200px] items-center justify-between">
			{/**  size & color */}
			<Icon
				icon={<BiDownload size="24px" color="#8b5cf6" />}
				title="size & color"
			/>
			<Icon
				icon={
					<BiDownload
						style={{ fontSize: "24px", color: "#8b5cf6" }}
						title="style"
					/>
				}
			/>

			<Icon
				icon={
					<BiDownload className="text-2xl text-violet-500" title="className" />
				}
			/>
		</div>
	);
};
IconWithCustomClass.storyName = "设置className";
