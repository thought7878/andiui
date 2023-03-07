import { ValidateError } from "async-validator";
import {
	createContext,
	FormEvent,
	forwardRef,
	ReactNode,
	useImperativeHandle,
} from "react";
import useStore, { FormState } from "./useStore";

export type RenderChildren = (form: FormState) => ReactNode;

export interface FormProps {
	/**children */
	children?: ReactNode | RenderChildren;
	/**The initial value of the form */
	initialValues?: Record<string, any>;
	/**the callback function,after the overall verification of the form is valid */
	onFinish?: (values: Record<string, any>) => void;
	/**the callback function,after the overall verification of the form is not valid */
	onFinishFailed?: (
		values: Record<string, any>,
		errors: Record<string, ValidateError[]>
	) => void;
}
export type IFormContext = Pick<
	ReturnType<typeof useStore>,
	"dispatch" | "fieldsState" | "validateField"
> &
	Pick<FormProps, "initialValues">;
//
export type IFormRef = Omit<
	ReturnType<typeof useStore>,
	| "formState"
	| "setFormState"
	| "fieldsState"
	| "dispatch"
	| "validateField"
	| "validateAllFields"
>;

//
export const FormContext = createContext<IFormContext>({} as IFormContext);

//
const InternalForm = forwardRef<IFormRef, FormProps>((props, ref) => {
	const { children, initialValues, onFinish, onFinishFailed } = props;
	// const formRef = useRef(null);
	// states
	const {
		validateField,
		formState,
		fieldsState,
		dispatch,
		validateAllFields,
		getFieldValue,
		setFieldValue,
		getFieldsValue,
		resetFields,
	} = useStore(initialValues);
	const passedFormContext: IFormContext = {
		dispatch,
		fieldsState,
		initialValues,
		validateField,
	};

	// expose api
	useImperativeHandle(ref, () => {
		return {
			getFieldValue,
			setFieldValue,
			getFieldsValue,
			resetFields,
		};
	}); //TODO: []问题

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
});

export default InternalForm;
