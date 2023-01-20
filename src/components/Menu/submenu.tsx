import classNames from "classnames";
import React, { useContext, useState } from "react";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";

interface SubmenuProps {
	index?: number;
	title: string;
	className?: string;
	children?: React.ReactNode;
}

const Submenu: React.FC<SubmenuProps> = (props) => {
	const { index, title, className, children } = props;
	const context = useContext(MenuContext);
	const [openMenu, setOpenMenu] = useState(false);
	//
	const classes = classNames("menu-item submenu-item", className, {
		"is-active": index === context.activeIndex,
	});
	const submenuClasses = classNames("aui-submenu", className, {
		"menu-opened": openMenu,
	});
	//1.去掉非 MenuItem，报错提示；2.可以省略 MenuItem 的index
	let newChildren = React.Children.map(children, (child, index) => {
		const childElement = child as React.FunctionComponentElement<MenuItemProps>;
		const { displayName } = childElement.type;
		if (displayName === "MenuItem") {
			// return React.cloneElement(childElement, { index });
			return childElement;
		}
		console.error("Warning: Menu has a child which is not MenuItem");
	});
	//点击显示子菜单
	function handleClick(e: React.MouseEvent) {
		e.preventDefault();
		setOpenMenu(!openMenu);
		console.log("clicked");
	}

	//
	return (
		<li className={classes}>
			<div className="submenu-title" onClick={handleClick}>
				{title}
			</div>
			<ul className={submenuClasses}>{newChildren}</ul>
		</li>
	);
};

Submenu.displayName = "Submenu";

export default Submenu;
