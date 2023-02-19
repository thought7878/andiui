import { ComponentMeta, ComponentStory } from "@storybook/react";
import Menu from "./";
import MenuItem from "./menuItem";
import Submenu from "./submenu";

const menuMeta: ComponentMeta<typeof Menu> = {
	title: "Menu 组件",
	component: Menu,
};
export default menuMeta;

//
const Template: ComponentStory<typeof Menu> = (args) => {
	return (
		<div className="menu-horizontal-container">
			<Menu defaultIndex="0" {...args}>
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
