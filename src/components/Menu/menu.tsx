import classNames from "classnames";
import React, { createContext, useState } from "react";
import { MenuItemProps } from "./menuItem";

//
type HandleSelect = (selectedIndex: number) => void;
type MenuDirection = "horizontal" | "vertical";
interface IMenuContext {
	activeIndex: number;
	onCLick?: HandleSelect;
}
export interface MenuProps {
	className?: string;
	direction?: MenuDirection;
	style?: React.CSSProperties;
	defaultIndex?: number;
	onSelect?: HandleSelect;
	children?: React.ReactNode;
}
//
export const MenuContext = createContext<IMenuContext>({ activeIndex: 0 });

//
const Menu: React.FC<MenuProps> = (props) => {
	const { className, direction, children, style, defaultIndex, onSelect } =
		props;
	const [activeIndex, setActiveIndex] = useState(defaultIndex);
	const passedContext: IMenuContext = {
		activeIndex: activeIndex ? activeIndex : 0,
		onCLick: handleItemClick,
	};
	//点击item，修改activeIndex，调用用户的onSelect
	function handleItemClick(index: number) {
		setActiveIndex(index);
		if (onSelect) {
			onSelect(index);
		}
	}
	//
	const classes = classNames("aui-menu", className, {
		"menu-vertical": direction === "vertical",
	});
	//
	let newChildren = React.Children.map(children, (child, index) => {
		const childElement = child as React.FunctionComponentElement<MenuItemProps>;
		const { displayName } = childElement.type;
		if (displayName === "MenuItem") {
			return React.cloneElement(childElement, { index });
		}
		console.error("Warning: Menu has a child which is not MenuItem");
	});
	//
	return (
		<ul className={classes} style={style} data-testid="test-menu-id">
			<MenuContext.Provider value={passedContext}>
				{newChildren}
			</MenuContext.Provider>
		</ul>
	);
};
Menu.defaultProps = {
	direction: "horizontal",
	defaultIndex: 0,
};

export default Menu;
