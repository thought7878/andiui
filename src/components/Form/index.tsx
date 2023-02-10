import { createContext, FC, ReactNode } from "react";
import useStore from "./useStore";

export interface FormProps {
	children?: ReactNode;
}
export type IFormContext = Pick<
	ReturnType<typeof useStore>,
	"dispatch" | "fieldsState"
>;

//
export const FormContext = createContext<IFormContext>({} as IFormContext);

//
const Form: FC<FormProps> = (props) => {
	const { children } = props;
	// states
	const { formState, fieldsState, setFormState, dispatch } = useStore();
	const passedFormContext: IFormContext = { dispatch, fieldsState };

	return (
		<form>
			<FormContext.Provider value={passedFormContext}>
				{children}
			</FormContext.Provider>
		</form>
	);
};

export default Form;
