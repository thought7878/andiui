import { FC, ReactNode } from "react";

interface FormProps {
	children?: ReactNode;
}

const Form: FC<FormProps> = (props) => {
	const { children } = props;

	return <form>{children}</form>;
};

export default Form;
