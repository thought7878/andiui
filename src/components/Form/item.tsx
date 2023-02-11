import { RuleItem } from "async-validator";
import React, { FC, ReactNode, useContext, useEffect } from "react";
import { FormContext } from ".";

// TODO 需要消化
export type SomeRequired<T, K extends keyof T> = Required<Pick<T, K>> &
	Omit<T, K>;

// type Test = SomeRequired<ItemProps, "getValueFromEvent">;

interface ItemProps {
	name: string;
	// defaultValue?: string | boolean; //string/boolean
	label?: string;
	children?: ReactNode;
	valueName?: string;
	eventName?: string; //value change event
	validateEventName?: string;
	getValueFromEvent?: (event: any) => any;
	rules?: RuleItem[];
}

const Item: FC<ItemProps> = (props) => {
	const {
		label,
		children,
		name,
		valueName = "value",
		// defaultValue = valueName === "value" ? "" : false,
		eventName = "onChange",
		validateEventName = "onBlur",
		rules,
		getValueFromEvent = (e) => {
			return e.target?.value;
		},
	} = props as SomeRequired<ItemProps, "getValueFromEvent" | "valueName">;

	const { dispatch, fieldsState, defaultValues, validateField } =
		useContext(FormContext);

	// mounted ,update form store's FieldsState
	useEffect(() => {
		const defaultValue = defaultValues && defaultValues[name];
		dispatch({
			type: "addField",
			name,
			value: { label, name, value: defaultValue || "", rules, isValid: true },
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
	// 额外的属性，事件名和value名来自props：value/checked，onChange
	const controlledProps: Record<string, any> = {};
	controlledProps[valueName] = value;
	controlledProps[eventName] = handleValueChange;
	controlledProps[validateEventName] = () => {
		validateField(name);
	};
	// 获取children数组的第一个元素
	const childList = React.Children.toArray(children);
	// 判断children类型，没有children/大于一个/不是有效的Element，警告
	if (childList.length === 0) {
		console.error("Item 组件,没有子元素!");
	} else if (childList.length > 1) {
		console.error("Item 子组件,不能大于1个!");
	}
	if (!React.isValidElement(childList[0])) {
		console.error("Item 子组件,不是有效的Element!");
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
		<div className={`mb-3 flex  items-center ${noLabelClass}`}>
			{label && (
				<label
					htmlFor=""
					title={label}
					className="shrink-0 basis-[30%] pr-3 text-right"
				>
					{label}
				</label>
			)}
			<div className="basis-[70%]">{newChild}</div>
		</div>
	);
};

export default Item;
