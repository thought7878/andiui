import { FC, ReactNode } from "react";
import useStore from "./useStore";

interface FormProps {
	children?: ReactNode;
}

const Form: FC<FormProps> = (props) => {
	const { children } = props;
	// states
	const { formState, fieldsState, setFormState, dispatch } = useStore();

	return <form>{children}</form>;
};

export default Form;
