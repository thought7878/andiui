import React from "react";
import classNames from "classnames";

export enum ButtonSize {
	Large = "lg",
	Smaill = "sm",
}

export enum ButtonType {
	Primary = "primary",
	Default = "default",
	Danger = "danger",
	Link = "link",
}

interface BaseButtonProps {
	className?: string;
	disabled?: boolean;
	size?: ButtonSize;
	btnType?: ButtonType;
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
	const classes = classNames("btn", className, {
		[`btn-${btnType}`]: btnType,
		[`btn-${size}`]: size,
		disabled: btnType === ButtonType.Link && disabled,
	});
	//return a
	if (btnType === ButtonType.Link && href) {
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
	btnType: ButtonType.Default,
};
export default Button;
