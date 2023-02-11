import Schema, { RuleItem, ValidateError } from "async-validator";
import { useReducer, useState } from "react";

export interface FieldState {
	name: string; //input/radio name
	value: string;
	rules: RuleItem[];
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
	const validateField = async (name: string) => {
		const { value, rules } = fieldsState[name];
		const descriptor = {
			[name]: rules,
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
			console.log("e", err.errors);
			console.log("e", err.fields);
			errors = err.errors;
		} finally {
			console.log("errors", isValid);
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
	};
}
