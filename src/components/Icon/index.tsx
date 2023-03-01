import classNames from "classnames";
import React from "react";
import { IconBaseProps, IconContext } from "react-icons";

//
export type ThemeProps =
	| "primary"
	| "secondary"
	| "success"
	| "info"
	| "warning"
	| "danger"
	| "light"
	| "dark";

export interface IconProps extends IconBaseProps {
	// theme?: ThemeProps;
	/**设置icon，也可以使用children方式 */
	icon?: React.ReactElement;
	/**子元素 */
	children?: React.ReactElement;
	/**设置color，css颜色，如：#8b5cf6/rgb(0, 255, 0)/hsl(30, 100%, 50%)/hsla(30, 100%, 50%, .3) */
	color?: string;
	/**设置size，css尺寸，如：2em/20px/2rem */
	size?: string;
	/**设置样式，可以覆盖size 和 color */
	style?: React.CSSProperties; //Can overwrite size and color,  style={ { verticalAlign: 'middle' } }
	/**设置样式 */
	className?: string;
	/**设置图标说明 */
	title?: string; //Icon description for accessibility
}

const Icon: React.FC<IconProps> = (props) => {
	const { icon, children, className, ...restProps } = props;

	//
	const classes = classNames("align-middle", className, {
		//'react-icons':From version 3, vertical-align: middle is not automatically given. Please use IconContext to specify className or specify an inline style.
		// [`icon-${theme}`]: theme,
	});

	//如果有icon显示icon；没有icon&有children，显示
	const element = icon || children;
	const _children = React.isValidElement(element)
		? React.cloneElement(element as any, {})
		: null;

	//
	return (
		<IconContext.Provider value={{ className: classes, ...restProps }}>
			<div className="inline-flex">{_children}</div>
		</IconContext.Provider>
	);
};

export default Icon;
