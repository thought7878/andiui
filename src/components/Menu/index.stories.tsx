import { ComponentMeta, ComponentStory } from "@storybook/react";
import Menu from "./";

const menuMeta: ComponentMeta<typeof Menu> = {
	title: "Menu 组件",
	// id: "Menu",
	component: Menu,
	subcomponents: { Submenu: Menu.SubMenu, MenuItem: Menu.Item },
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
				<Menu.Item>菜单1</Menu.Item>
				<Menu.Item>菜单2</Menu.Item>
				<Menu.Item>菜单3</Menu.Item>
				<Menu.Item disabled>菜单4</Menu.Item>
				<Menu.SubMenu title="菜单4">
					<Menu.Item>菜单1</Menu.Item>
					<Menu.Item>菜单2</Menu.Item>
					<Menu.Item>菜单3</Menu.Item>
				</Menu.SubMenu>
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
