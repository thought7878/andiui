import { FC } from "react";
import InternalForm from "./form";
import Item, { ItemProps } from "./item";

export type InternalFormType = typeof InternalForm;

export type CompoundedFormType = InternalFormType & {
	Item: FC<ItemProps>;
};

export const Form = InternalForm as CompoundedFormType;
Form.Item = Item;

export default Form;
