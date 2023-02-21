import classNames from "classnames";
import React from "react";
import Icon from "../Icon";
import Spinner from "../Spinner";
import "./index.css";

interface BaseButtonProps {
	className?: string;
	/**设置 Button 类型 */
	btnType?: "primary" | "default" | "danger" | "link";
	/**设置 Button 大小，支持 lg 或者是 sm ，默认是md*/
	size?: "lg" | "md" | "sm";
	/**设置 Button 不可用 */
	disabled?: boolean;
	/**设置 Button 左侧图标 */
	leftIcon?: React.ReactElement;
	/**设置 Button 右侧图标 */
	rightIcon?: React.ReactElement;
	/**设置 Button 加载 */
	loading?: boolean;

	children: React.ReactNode;
	href?: string;
	// icon?: IconProp;
}
//
type NativeButtonProps = BaseButtonProps &
	React.ButtonHTMLAttributes<HTMLElement>;
type NativeAnchorProps = BaseButtonProps &
	React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & NativeAnchorProps>;

//
const Button: React.FC<ButtonProps> = (props) => {
	const {
		btnType,
		className,
		loading,
		leftIcon,
		rightIcon,
		disabled,
		size,
		children,
		href,
		...otherProps
	} = props;
	//btn,btn-lg,btn-primary
	const classes = classNames(
		"btn",
		{
			[`btn-${btnType}`]: btnType,
			[`btn-${size}`]: size,
			disabled: (btnType === "link" && disabled) || loading,
		},
		className
	);
	//return a
	if (btnType === "link" && href) {
		return (
			<a href={href} className={classes} {...otherProps}>
				{children}
			</a>
		);
	}
	//return button
	return (
		<div className="inline-flex">
			<button className={classes} disabled={disabled} {...otherProps}>
				{leftIcon && <Icon icon={leftIcon} className="mr-1" />}
				{loading && <Spinner className="mr-1" />}
				{children}
				{rightIcon && <Icon icon={rightIcon} className="ml-1" />}
			</button>
		</div>
	);
};
//
Button.defaultProps = {
	disabled: false,
	btnType: "default",
};
export default Button;
