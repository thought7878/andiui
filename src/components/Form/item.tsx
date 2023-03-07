import React, { FC, ReactNode, useContext, useEffect } from "react";
import { FormContext } from "./form";
import { CustomRule } from "./useStore";

// TODO 需要消化
export type SomeRequired<T, K extends keyof T> = Required<Pick<T, K>> &
	Omit<T, K>;

export interface ItemProps {
	/**element's name. e.g. username/password */
	name: string;
	// defaultValue?: string | boolean; //string/boolean
	/**label text */
	label?: string;
	/**The name of element's value. e.g. value/checked */
	valueName?: string;
	/**The event name that changes value. e.g. onChange */
	valueChangeEventName?: string;
	/**The event name when validate . e.g. onBlur */
	validateEventName?: string;
	/**The function how to  get value from the Event object . */
	getValueFromEvent?: (event: any) => any;
	/**The rules how to verify the element. Please refer to [async-validator rules](https://github.com/yiminghe/async-validator)*/
	rules?: CustomRule[];
	/**children */
	children?: ReactNode;
}

export const Item: FC<ItemProps> = (props) => {
	const {
		name = "",
		label = "",
		children = "",
		valueName = "value",
		// defaultValue = valueName === "value" ? "" : false,
		valueChangeEventName = "onChange",
		validateEventName = "onBlur",
		rules = [],
		getValueFromEvent = (e) => {
			return e.target?.value;
		},
	} = props as SomeRequired<ItemProps, "getValueFromEvent" | "valueName">;

	const { dispatch, fieldsState, initialValues, validateField } =
		useContext(FormContext);

	// mounted ,update form store's FieldsState
	useEffect(() => {
		const defaultValue = initialValues && initialValues[name];
		// TODO: 应该排除掉非数据的，如：Button
		dispatch({
			type: "addField",
			name,
			value: {
				label,
				name,
				value: defaultValue || "",
				rules,
				errors: [],
				isValid: true,
			},
		});
	}, []);

	//value 改变了，更新store中自己的value
	function handleValueChange(e: any) {
		const value = getValueFromEvent(e);
		dispatch({ type: "updateValue", name, value });
	}

	// TODO should insert into mounted code
	// 获取自己的fieldState
	const fieldState = fieldsState[name];
	const value = fieldState?.value;
	const isRequired = rules?.some(
		(rule) => typeof rule !== "function" && rule.required
	);
	// error
	const errors = fieldState?.errors;
	const hasError = errors && errors.length > 0;
	// 额外的属性，事件名和value名来自props：onChange，value/checked
	const controlledProps: Record<string, any> = {};
	controlledProps[valueName] = value;
	controlledProps[valueChangeEventName] = handleValueChange;
	controlledProps[validateEventName] = () => {
		validateField(name);
	};
	// 获取children数组的第一个元素
	const childList = React.Children.toArray(children);
	// 判断children类型，没有children/大于一个/不是有效的Element，警告
	if (childList.length === 0) {
		console.error("Item no children!");
	} else if (childList.length > 1) {
		console.error("Item's children can not be more than 1!");
	}
	if (!React.isValidElement(childList[0])) {
		console.error("Item's children is not valid Element!");
	}
	// cloneElement，新element包含旧的所有属性和新的属性
	const originChild = childList[0] as React.ReactElement;
	const newChild = React.cloneElement(originChild, {
		...originChild.props,
		...controlledProps,
	});

	//没有label的，右对齐
	let noLabelClass = "";
	if (!label) {
		noLabelClass = "flex-row-reverse";
	}
	//
	return (
		<div className={`mb-5 flex  items-center ${noLabelClass}`}>
			{label && (
				<label
					htmlFor=""
					title={label}
					className="shrink-0 basis-[30%] pr-3 text-right"
				>
					{isRequired && (
						<span className="mr-1 align-middle text-danger">*</span>
					)}
					{label}
				</label>
			)}
			<div className="relative basis-[70%]">
				{newChild}
				{hasError && (
					<div className="absolute bottom-[-1.25rem] left-0 min-w-[500px] text-sm text-danger">
						{errors[0].message}
					</div>
				)}
			</div>
		</div>
	);
};

Item.defaultProps = {
	name: "",
	label: "",
	children: "",
	valueName: "value",
	// defaultValue = valueName === "value" ? "" : false,
	valueChangeEventName: "onChange",
	validateEventName: "onBlur",
	rules: [],
	getValueFromEvent: (e) => {
		return e.target?.value;
	},
};

export default Item;
