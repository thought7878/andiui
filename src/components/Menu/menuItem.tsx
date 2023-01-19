import classNames from "classnames";
import React, { useContext } from "react";
import { MenuContext } from "./menu";

//
interface MenuItemProps {
	index: number;
	className?: string;
	style?: React.CSSProperties;
	children?: React.ReactNode;
	disabled?: boolean;
}

//
const MenuItem: React.FC<MenuItemProps> = (props) => {
	const { className, style, children, index, disabled } = props;
	const context = useContext(MenuContext);
	//
	const classes = classNames("menu-item", className, {
		"is-disabled": disabled,
		"is-active": index === context.activeIndex,
	});
	//
	function handleClick() {
		if (context.onCLick && !disabled) {
			context.onCLick(index);
		}
	}
	//
	return (
		<li className={classes} style={style} onClick={handleClick}>
			{children}
		</li>
	);
};

MenuItem.defaultProps = {
	disabled: false,
};

export default MenuItem;
