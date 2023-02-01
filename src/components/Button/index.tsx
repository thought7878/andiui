import classNames from "classnames";
import React from "react";
import "./index.css";

interface BaseButtonProps {
	className?: string;
	disabled?: boolean;
	size?: "lg" | "md" | "sm";
	btnType?: "primary" | "default" | "danger" | "link";
	children: React.ReactNode;
	href?: string;
}
//
type NativeButtonProps = BaseButtonProps &
	React.ButtonHTMLAttributes<HTMLElement>;
type NativeAnchorProps = BaseButtonProps &
	React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & NativeAnchorProps>;

//
const Button: React.FC<ButtonProps> = (props) => {
	const { btnType, className, disabled, size, children, href, ...otherProps } =
		props;
	//btn,btn-lg,btn-primary
	const classes = classNames(
		"btn",
		{
			[`btn-${btnType}`]: btnType,
			[`btn-${size}`]: size,
			disabled: btnType === "link" && disabled,
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
		<button className={classes} disabled={disabled} {...otherProps}>
			{children}
		</button>
	);
};
//
Button.defaultProps = {
	disabled: false,
	btnType: "default",
};
export default Button;
