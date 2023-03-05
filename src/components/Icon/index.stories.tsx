import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";
import { BsApple, BsTwitter } from "react-icons/bs";
import Icon from "./";

const iconMeta: ComponentMeta<typeof Icon> = {
	title: "Icon",
	component: Icon,
};
export default iconMeta;

//
export const IconWithDefault: ComponentStory<typeof Icon> = (args) => {
	return (
		<div className="flex w-[200px] justify-between">
			<Icon>
				<BsTwitter />
			</Icon>
			<Icon>
				<BsApple />
			</Icon>
			<Icon icon={<BiDownload />} />
			<Icon icon={<AiOutlineInfoCircle />} />
		</div>
	);
};
IconWithDefault.storyName = "icon & children";

//
export const IconWithCustomColor: ComponentStory<typeof Icon> = (args) => {
	return (
		<div className="flex w-[200px] justify-between">
			<Icon color="#000">
				<BsApple />
			</Icon>
			<Icon color="rgb(0,0,0)">
				<BsApple />
			</Icon>
		</div>
	);
};
IconWithCustomColor.storyName = "color";

//
export const IconWithCustomSize: ComponentStory<typeof Icon> = (args) => {
	return (
		<div className="flex w-[200px] items-center justify-between">
			<Icon size="16px">
				<BsApple />
			</Icon>
			<Icon size="1.5rem">
				<BsApple />
			</Icon>
			<Icon size="2em" icon={<BsApple />} />
			{/* <Icon size="3em" icon={<BsApple />} /> */}
		</div>
	);
};
IconWithCustomSize.storyName = "size";

//
export const IconWithCustomClass: ComponentStory<typeof Icon> = (args) => {
	return (
		<div className="flex w-[200px] items-center justify-between">
			<Icon size="28px" color="#f43f5e">
				<BsApple />
			</Icon>

			<Icon className="text-[28px] text-[#22c55e]">
				<BsApple />
			</Icon>
		</div>
	);
};
IconWithCustomClass.storyName = "custom with className";

//
export const IconWithCustomStyle: ComponentStory<typeof Icon> = (args) => {
	return (
		<div className="flex w-[200px] items-center justify-between">
			<Icon size="28px" color="#f43f5e">
				<BsApple />
			</Icon>
			<Icon style={{ fontSize: "28px", color: "#22c55e" }}>
				<BsApple />
			</Icon>
		</div>
	);
};
IconWithCustomStyle.storyName = "custom with style";
