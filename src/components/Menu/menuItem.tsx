import classNames from "classnames";
import React from "react";

interface MenuItemProps {
	className?: string;
	style?: React.CSSProperties;
	children?: React.ReactNode;
	index?: number;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
	const { className, style, children, index } = props;
	const classes = classNames("aui-menu-item", className);
	return (
		<li className={classes} style={style}>
			{children}
		</li>
	);
};

export default MenuItem;
