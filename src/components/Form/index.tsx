import { ValidateError } from "async-validator";
import { createContext, FC, FormEvent, ReactNode } from "react";
import useStore, { FormState } from "./useStore";

export type RenderChildren = (form: FormState) => ReactNode;

export interface FormProps {
	children?: ReactNode | RenderChildren;
	defaultValues?: Record<string, any>;
	onFinish?: (values: Record<string, any>) => void;
	onFinishFailed?: (
		values: Record<string, any>,
		errors: Record<string, ValidateError[]>
	) => void;
}
export type IFormContext = Pick<
	ReturnType<typeof useStore>,
	"dispatch" | "fieldsState" | "validateField"
> &
	Pick<FormProps, "defaultValues">;

//
export const FormContext = createContext<IFormContext>({} as IFormContext);

//
const Form: FC<FormProps> = (props) => {
	const { children, defaultValues, onFinish, onFinishFailed } = props;
	// states
	const { validateField, formState, fieldsState, dispatch, validateAllFields } =
		useStore();
	const passedFormContext: IFormContext = {
		dispatch,
		fieldsState,
		defaultValues,
		validateField,
	};

	//
	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		e.stopPropagation();
		const { isValid, errors, values } = await validateAllFields();
		if (isValid && onFinish) {
			onFinish(values);
		} else if (!isValid && onFinishFailed) {
			onFinishFailed(values, errors);
		}
	}

	//
	function renderChildren(): ReactNode {
		if (typeof children === "function") {
			return children(formState);
		}
		return children;
	}

	return (
		<form onSubmit={handleSubmit}>
			<FormContext.Provider value={passedFormContext}>
				{renderChildren()}
			</FormContext.Provider>
		</form>
	);
};

export default Form;
