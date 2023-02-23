import { FC } from "react";
import Menu, { MenuProps } from "./menu";
import MenuItem, { MenuItemProps } from "./menuItem";
import Submenu, { SubmenuProps } from "./submenu";

export type IMenuComponent = FC<MenuProps> & {
	Item: FC<MenuItemProps>;
	SubMenu: FC<SubmenuProps>;
};

const MenuComponent = Menu as IMenuComponent;
MenuComponent.Item = MenuItem;
MenuComponent.SubMenu = Submenu;

export default MenuComponent;
