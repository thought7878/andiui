import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useRef } from "react";
import Form from ".";

import Button from "../Button";
import Input from "../Input";
import { IFormRef } from "./form";

const formMeta: ComponentMeta<typeof Form> = {
	title: "Form 组",
	component: Form,
	subcomponents: { "Form.Item": Form.Item },
};
export default formMeta;

//
// const confirmPasswordRules: CustomRule[] = [
// 	{ type: "string", required: true, min: 3, max: 8 },
// 	({ getFieldValue }) => ({
// 		asyncValidator: (rule, value) => {
// 			if (value !== getFieldValue("password")) {
// 				return Promise.reject("Confirm password is different from Password!");
// 			}

// 			return Promise.resolve();
// 		},
// 	}),
// ];

//
export const FormWithDefault: ComponentStory<typeof Form> = (args) => {
	return (
		<div className="w-[800px]">
			<Form {...args}>
				<Form.Item label="Username:" name="username">
					<Input />
				</Form.Item>
				<Form.Item label="Password:" name="password">
					<Input type="password" />
				</Form.Item>
			</Form>
		</div>
	);
};
FormWithDefault.storyName = "label & name";

//
export const FormWithLayout: ComponentStory<typeof Form> = (args) => {
	return (
		<div className="w-[800px]">
			<Form>
				<Form.Item label="Username:" name="username">
					<Input />
				</Form.Item>
				<Form.Item label="Password:" name="password">
					<Input type="password" />
				</Form.Item>

				<div className="flex pl-[30%]">
					<Form.Item
						name="remember"
						valueName="checked"
						valueChangeEventName="onChange"
						getValueFromEvent={(e) => e.target.checked}
					>
						<input type="checkbox" className="mr-1" />
					</Form.Item>
					<span className="text-base">Remember me</span>
				</div>
			</Form>
		</div>
	);
};
FormWithLayout.storyName = "layout without label ";

//
export const FormWithRules: ComponentStory<typeof Form> = (args) => {
	return (
		<div className="w-[800px]">
			<Form {...args}>
				<Form.Item
					label="Username:"
					name="username"
					rules={[{ type: "email", required: true }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Password:"
					name="password"
					rules={[{ type: "string", required: true, min: 3, max: 8 }]}
				>
					<Input type="password" />
				</Form.Item>
				{/* TODO: FieldsState Bug!!! */}
				<Form.Item>
					<Button btnType="primary">Login</Button>
				</Form.Item>
			</Form>
		</div>
	);
};
FormWithRules.storyName = "Item rules";
//
export const FormWithInitialValues: ComponentStory<typeof Form> = (args) => {
	return (
		<div className="w-[800px]">
			<Form
				initialValues={{
					username: "andy@gmail.com",
					password: "123456",
					// confirmPassword: "111",
					// agreement: true,
				}}
			>
				<Form.Item
					label="Username:"
					name="username"
					rules={[{ type: "email", required: true }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Password:"
					name="password"
					rules={[{ type: "string", required: true, min: 3, max: 8 }]}
				>
					<Input type="password" />
				</Form.Item>
				<Form.Item name="submitButton">
					<Button btnType="primary">Login</Button>
				</Form.Item>
			</Form>
		</div>
	);
};
FormWithInitialValues.storyName = "initialValues";

//
export const FormWithFormEvents: ComponentStory<typeof Form> = (args) => {
	return (
		<div className="w-[800px]">
			<Form {...args}>
				<Form.Item
					label="Username:"
					name="username"
					rules={[{ type: "email", required: true }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Password:"
					name="password"
					rules={[{ type: "string", required: true, min: 3, max: 8 }]}
				>
					<Input type="password" />
				</Form.Item>
				<Form.Item name="submitButton">
					<Button btnType="primary">Login</Button>
				</Form.Item>
			</Form>
		</div>
	);
};
FormWithFormEvents.storyName = "onFinish & onFinishFailed";

//
export const FormWithReset: ComponentStory<typeof Form> = (args) => {
	let formRef = useRef<IFormRef>(null);

	return (
		<div className="w-[800px]">
			<Form
				ref={formRef}
				onFinish={(values) => {}}
				onFinishFailed={(values, errors) => {}}
			>
				<Form.Item
					label="Username:"
					name="username"
					rules={[{ type: "email", required: true }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Password:"
					name="password"
					valueName="value"
					valueChangeEventName="onChange"
					getValueFromEvent={(e) => e.target.value}
					rules={[{ type: "string", required: true, min: 3, max: 8 }]}
				>
					<Input type="password" />
				</Form.Item>
				<Form.Item
					label="confirm Password:"
					name="confirmPassword"
					valueName="value"
					valueChangeEventName="onChange"
					getValueFromEvent={(e) => e.target.value}
					// rules={confirmPasswordRules}
				>
					<Input type="password" />
				</Form.Item>
				<div className="flex pl-[30%]">
					<Form.Item
						name="agreement"
						valueName="checked"
						valueChangeEventName="onChange"
						getValueFromEvent={(e) => e.target.checked}
						rules={[
							{
								type: "enum",
								enum: [true],
								message: "Please agree to the agreement",
							},
						]}
					>
						<input type="checkbox" className="mr-1" />
					</Form.Item>
					<span className="text-base">
						Registration means that you agree to{" "}
						<a href="#" className="text-primary">
							the agreement
						</a>
					</span>
				</div>
				<Form.Item name="submitButton">
					<Button btnType="primary">Login</Button>
				</Form.Item>
				<Form.Item name="submitButton">
					<Button
						onClick={() => {
							// console.log(formRef);
							// console.log(
							// 	"Username:",
							// 	formRef.current?.getFieldValue("username")
							// 	// formRef.current?.getFieldsValue()
							// );
							formRef.current?.resetFields();
						}}
					>
						Reset
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};
FormWithReset.storyName = "default";
