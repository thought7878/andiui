import InternalForm from "./form";
import Item from "./item";

export type InternalFormType = typeof InternalForm;

export type CompoundedFormType = InternalFormType & {
	Item: typeof Item;
};

const Form = InternalForm as CompoundedFormType;
Form.Item = Item;

export default Form;
