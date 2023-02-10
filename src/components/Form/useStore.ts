import { useReducer, useState } from "react";

export interface FieldState {
	name: string; //input/radio name
	value: string;
	rules: any[];
	isValid: boolean;
	errors: any[];
}
export interface FieldsState {
	[key: string]: FieldState;
}
export interface FormState {
	isValid: boolean;
}
export interface FieldsAction {
	type: "addField";
	name: string; //FieldState name
	value: any;
}

//
function fieldsReducer(state: FieldsState, action: FieldsAction): FieldsState {
	switch (action.type) {
		case "addField":
			return { ...state, [action.name]: { ...action.value } };
		default:
			return state;
	}
}

//
export default function useStore() {
	const [formState, setFormState] = useState<FormState>({ isValid: true });
	const [fieldsState, dispatch] = useReducer(fieldsReducer, {});

	return {
		formState,
		setFormState,
		fieldsState,
		dispatch,
	};
}
