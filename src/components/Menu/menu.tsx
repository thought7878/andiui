import classNames from "classnames";
import React from "react";

type MenuDirection = "horizontal" | "vertical";

export interface MenuProps {
	className?: string;
	direction?: MenuDirection;
	style?: React.CSSProperties;
	defaultIndex?: number;
	onSelect?: (selectedIndex: number) => void;
	children: React.ReactNode;
}

const Menu: React.FC<MenuProps> = (props) => {
	const { className, direction, children, style, defaultIndex, onSelect } =
		props;

	const classes = classNames("aui-menu", className, {
		"menu-vertical": direction === "vertical",
	});
	return (
		<ul className={classes} style={style}>
			{children}
		</ul>
	);
};
Menu.defaultProps = {
	direction: "horizontal",
	defaultIndex: 0,
};

export default Menu;
