import classNames from "classnames";
import React from "react";
import { IconBaseProps, IconContext } from "react-icons";
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
	theme?: ThemeProps;
	icon?: React.ReactElement;
}

const Icon: React.FC<IconProps> = (props) => {
	const { className, icon, color, children, theme, ...restProps } = props;
	const classes = classNames("aui-icon", className, {
		[`icon-${theme}`]: theme,
	});

	//如果有icon显示icon；没有icon&有children，显示
	const element = icon || children;
	const _children = React.isValidElement(element)
		? React.cloneElement(element as any, {})
		: null;

	//
	return (
		<IconContext.Provider value={{ color: color, className: classes }}>
			<div className="inline-block">{_children}</div>
		</IconContext.Provider>
	);
};

export default Icon;
