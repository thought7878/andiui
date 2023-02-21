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
	// theme?: ThemeProps;
	// TODO unfinished
	icon?: React.ReactElement;
	color?: string;
	size?: string; //2em/20px/2rem
	className?: string;
	style?: React.CSSProperties; //Can overwrite size and color,  style={ { verticalAlign: 'middle' } }
	title?: string; //Icon description for accessibility
}

const Icon: React.FC<IconProps> = (props) => {
	const { icon, children, className, style, ...restProps } = props;
	const classes = classNames("aui-icon", className, {
		// [`icon-${theme}`]: theme,
	});

	//如果有icon显示icon；没有icon&有children，显示
	const element = icon || children;
	const _children = React.isValidElement(element)
		? React.cloneElement(element as any, {})
		: null;

	//
	return (
		<IconContext.Provider value={{ className: classes, style, ...restProps }}>
			<div className="inline-flex">{_children}</div>
		</IconContext.Provider>
	);
};

export default Icon;
