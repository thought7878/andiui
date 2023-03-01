import classNames from "classnames";
import React from "react";
// import "./index.css";

type InputSize = "lg" | "sm";

export interface InputProps
	extends Partial<React.InputHTMLAttributes<HTMLElement>> {
	/**设置 input 大小，支持 lg 或者是 sm */
	inputSize?: InputSize;
	/**是否禁用 Input */
	disabled?: boolean;
	/**添加图标，在右侧悬浮添加一个图标，用于提示 */
	icon?: React.ReactElement;
	/**添加前缀，用于配置一些固定组合 */
	prepend?: React.ReactNode;
	/**添加后缀，用于配置一些固定组合 */
	append?: React.ReactNode;
}

/* type InputProps = Partial<
	BaseInputProps & React.InputHTMLAttributes<HTMLElement>
>; */

/**
 * Input 组件，支持 HTML input 的所有基本属性。通过鼠标或键盘输入内容，是最基础的表单域的包装。
 *
 * ```js
 * // 这样引用
 * import { Input } from 'aui'
 * ```
 *
 */
export const Input: React.FC<InputProps> = (props) => {
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
		// className: className,
		[`input-size-${inputSize}`]: inputSize,
		// "is-disabled": disabled,
		"input-group": prepend || append,
		"input-group-append": !!append,
		"input-group-prepend": !!prepend,
	});

	return (
		<div className={`relative inline-flex  w-full ${classes}`}>
			{prepend && (
				<div className="input-prepend-wrapper mb-0 inline-flex items-center whitespace-nowrap rounded-md border border-solid border-auiLight-divider bg-auiLight-divider px-3 py-1.5 text-center text-base font-normal text-auiLight-primary">
					{prepend}
				</div>
			)}
			{icon && (
				<div className="icon-wrapper  absolute right-0 top-0 flex h-full w-[35px] items-center justify-center text-auiLight-secondary">
					{icon}
				</div>
			)}
			<input
				className={`aui-input ${className}`}
				style={style}
				disabled={disabled}
				{...otherProps}
			/>
			{append && (
				<div className="input-append-wrapper mb-0 inline-flex items-center whitespace-nowrap rounded-md border border-solid border-auiLight-divider bg-auiLight-divider px-3 py-1.5 text-center text-base font-normal text-auiLight-primary">
					{append}
				</div>
			)}
		</div>
	);
};

Input.defaultProps = {
	disabled: false,
};

export default Input;
