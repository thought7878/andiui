import { IconProp } from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";
import React from "react";
import Icon from "../Icon";

type InputSize = "lg" | "sm";

export interface InputProps
	extends Partial<React.InputHTMLAttributes<HTMLElement>> {
	/**是否禁用 Input */
	disabled?: boolean;
	/**设置 input 大小，支持 lg 或者是 sm */
	inputSize?: InputSize;
	/**添加图标，在右侧悬浮添加一个图标，用于提示 */
	icon?: IconProp;
	/**添加前缀 用于配置一些固定组合 */
	prepend?: React.ReactNode;
	/**添加后缀 用于配置一些固定组合 */
	append?: React.ReactNode;
}

/* type InputProps = Partial<
	BaseInputProps & React.InputHTMLAttributes<HTMLElement>
>; */

/**
 * Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 *
 * ~~~js
 * // 这样引用
 * import { Input } from 'aui'
 * ~~~
 * 支持 HTMLInput 的所有基本属性
 */
const Input: React.FC<InputProps> = (props) => {
	const {
		disabled,
		inputSize,
		icon,
		prepend,
		append,
		style,
		className,
		...otherProps
	} = props;
	//style
	const classes = classNames("aui-input-wrapper", {
		className: className,
		[`input-size-${inputSize}`]: inputSize,
		"is-disabled": disabled,
		"input-group": prepend || append,
		"input-group-append": !!append,
		"input-group-prepend": !!prepend,
	});

	return (
		<div className={classes} style={style}>
			{prepend && <div className="aui-input-group-prepend">{prepend}</div>}
			{icon && (
				<div className="icon-wrapper">
					<Icon icon={icon} title={`title-${icon}`} />
				</div>
			)}
			<input className="aui-input-inner" disabled={disabled} {...otherProps} />
			{append && <div className="aui-input-group-append">{append}</div>}
		</div>
	);
};

Input.defaultProps = {
	disabled: false,
};

export default Input;
