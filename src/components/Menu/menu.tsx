import classNames from "classnames";
import React, { createContext, useState } from "react";

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
	return (
		<ul className={classes} style={style} data-testid="test-menu-id">
			<MenuContext.Provider value={passedContext}>
				{children}
			</MenuContext.Provider>
		</ul>
	);
};
Menu.defaultProps = {
	direction: "horizontal",
	defaultIndex: 0,
};

export default Menu;
