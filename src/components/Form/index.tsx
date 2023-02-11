import { createContext, FC, ReactNode } from "react";
import useStore from "./useStore";

export interface FormProps {
	children?: ReactNode;
	defaultValues?: Record<string, any>;
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
	const { children, defaultValues } = props;
	// states
	const { validateField, fieldsState, dispatch } = useStore();
	const passedFormContext: IFormContext = {
		dispatch,
		fieldsState,
		defaultValues,
		validateField,
	};

	return (
		<form>
			<FormContext.Provider value={passedFormContext}>
				{children}
			</FormContext.Provider>
		</form>
	);
};

export default Form;
