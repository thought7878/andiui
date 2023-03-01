import classNames from "classnames";
import React, { createContext, useState } from "react";
// import "./index.css";
import { MenuItemProps } from "./menuItem";

//
type HandleSelect = (selectedIndex: string) => void;

type MenuDirection = "horizontal" | "vertical";

interface IMenuContext {
	activeIndex: string;
	onCLick?: HandleSelect;
	direction?: string;
}

export interface MenuProps {
	className?: string;
	/** 设置方向：横向（默认值）/纵向 */
	direction?: MenuDirection;
	/** 设置自定义样式 */
	style?: React.CSSProperties;
	/** 设置默认defaultIndex */
	defaultIndex?: string;
	/** 选中的回调函数 */
	onSelect?: HandleSelect;
	/**  children*/
	children?: React.ReactNode;
}
//
export const MenuContext = createContext<IMenuContext>({ activeIndex: "0" });

/**
 * Menu 组件
 * ### 导入
 * ```js
 * import Menu from "aui";
 * ```
 * @param props
 * @returns
 */
const Menu: React.FC<MenuProps> = (props) => {
	const { className, direction, children, style, defaultIndex, onSelect } =
		props;
	const [activeIndex, setActiveIndex] = useState(defaultIndex);
	const passedContext: IMenuContext = {
		activeIndex: activeIndex ? activeIndex : "0",
		onCLick: handleItemClick,
		direction: direction,
	};
	/**
	 * 点击item，修改activeIndex，调用用户的onSelect
	 *
	 * @param index
	 */
	function handleItemClick(index: string) {
		setActiveIndex(index);
		if (onSelect) {
			onSelect(index);
		}
	}

	//
	const classes = classNames("aui-menu", className, {
		"menu-vertical": direction === "vertical",
		"menu-horizontal": direction !== "vertical",
	});
	//1.去掉非 MenuItem/Submenu，报错提示；2.可以省略 MenuItem 的index
	let newChildren = React.Children.map(children, (child, index) => {
		const childElement = child as React.FunctionComponentElement<MenuItemProps>;
		const { displayName } = childElement.type;
		if (displayName === "MenuItem" || displayName === "Submenu") {
			return React.cloneElement(childElement, { index: index + "" });
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
	defaultIndex: "0",
};

export default Menu;
