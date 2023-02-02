import classNames from "classnames";
import React from "react";
import Icon from "../Icon";
import Spinner from "../Spinner";
import "./index.css";

interface BaseButtonProps {
	className?: string;
	disabled?: boolean;
	size?: "lg" | "md" | "sm";
	btnType?: "primary" | "default" | "danger" | "link";
	loading?: boolean;
	children: React.ReactNode;
	href?: string;
	rightIcon?: React.ReactElement;
	leftIcon?: React.ReactElement;
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
		<div className="inline-block">
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
