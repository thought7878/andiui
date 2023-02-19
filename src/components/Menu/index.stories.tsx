import { ComponentMeta, ComponentStory } from "@storybook/react";
import Menu from "./";
// import mdx from "./index.mdx";
import MenuItem from "./menuItem";
import Submenu from "./submenu";

const menuMeta: ComponentMeta<typeof Menu> = {
	title: "Menu 组件",
	// id: "Menu",
	component: Menu,
	subcomponents: { Submenu: Submenu, MenuItem: MenuItem },
	args: { defaultIndex: "1" },
	argTypes: {
		defaultIndex: {
			// control: "color",
			description: "设置默认选中的tab",
		},
	},
	parameters: {
		// docs: { page: mdx },
		backgrounds: {
			values: [
				{ name: "blue", value: "#3b82f6" },
				{ name: "green", value: "#22c55e" },
			],
		},
	},
};
export default menuMeta;

//
const Template: ComponentStory<typeof Menu> = (args) => {
	return (
		<div className="menu-horizontal-container">
			<Menu {...args}>
				<MenuItem>菜单1</MenuItem>
				<MenuItem>菜单2</MenuItem>
				<MenuItem>菜单3</MenuItem>
				<MenuItem disabled>菜单4</MenuItem>
				<Submenu title="菜单4">
					<MenuItem>菜单1</MenuItem>
					<MenuItem>菜单2</MenuItem>
					<MenuItem>菜单3</MenuItem>
				</Submenu>
			</Menu>
		</div>
	);
};

//
export const Default = Template.bind({});
Default.args = {};
Default.storyName = "默认Menu";

//
export const Vertical = Template.bind({});
Vertical.args = { defaultIndex: "1", direction: "vertical" };
Vertical.storyName = "纵向的Menu";
