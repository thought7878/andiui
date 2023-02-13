import Schema, { RuleItem, ValidateError } from "async-validator";
import { useReducer, useState } from "react";

export type CustomRuleFunc = (obj: {
	[getFieldValue: string]: (name: string) => any;
}) => RuleItem; //{ getFieldValue }
export type CustomRule = RuleItem | CustomRuleFunc;

export interface FieldState {
	name: string; //input/radio name
	value: string;
	rules: CustomRule[];
	isValid: boolean;
	errors: ValidateError[];
}
export interface FieldsState {
	[key: string]: FieldState;
}
export interface FormState {
	isValid: boolean;
}
export interface FieldsAction {
	type: "addField" | "updateValue" | "updateValidateInfo";
	name: string; //FieldState name
	value: any; //FieldState value
}

//
function fieldsReducer(state: FieldsState, action: FieldsAction): FieldsState {
	switch (action.type) {
		case "addField":
			return { ...state, [action.name]: { ...action.value } };
		case "updateValue":
			return {
				...state,
				[action.name]: { ...state[action.name], value: action.value },
			};
		case "updateValidateInfo":
			const { isValid, errors } = action.value;
			return {
				...state,
				[action.name]: { ...state[action.name], isValid, errors },
			};
		default:
			return state;
	}
}

//
export default function useStore() {
	const [formState, setFormState] = useState<FormState>({ isValid: true });
	const [fieldsState, dispatch] = useReducer(fieldsReducer, {});

	//
	const getFieldValue = (name: string) => {
		return fieldsState[name]?.value;
	};

	//调用自定义的规则函数，生成RuleItem[]
	const transformRules = (rules: CustomRule[]) => {
		return rules.map((rule) => {
			if (typeof rule === "function") {
				return rule({ getFieldValue });
			}
			return rule;
		});
	};

	//
	const validateField = async (name: string) => {
		const { value, rules } = fieldsState[name];
		const transformedRules = transformRules(rules);
		//
		const descriptor = {
			[name]: transformedRules,
		};
		const valueMap = {
			[name]: value,
		};
		const validator = new Schema(descriptor);
		let isValid = true;
		let errors: ValidateError[] = [];
		//
		try {
			await validator.validate(valueMap);
		} catch (e) {
			const err = e as any;
			isValid = false;
			errors = err.errors;
		} finally {
			dispatch({
				type: "updateValidateInfo",
				name,
				value: { isValid, errors },
			});
		}
	};

	return {
		formState,
		setFormState,
		fieldsState,
		dispatch,
		validateField,
		getFieldValue,
	};
}
