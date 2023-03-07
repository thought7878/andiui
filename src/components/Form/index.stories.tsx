import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useRef } from "react";
import Button from "../Button";
import Input from "../Input";
import Form from "./";
import { IFormRef } from "./form";

const formMeta: ComponentMeta<typeof Form> = {
	title: "Form 组件",
	component: Form,
	subcomponents: { Item: Form.Item },
};
export default formMeta;

//
const confirmPasswordRules: CustomRule[] = [
	{ type: "string", required: true, min: 3, max: 8 },
	({ getFieldValue }) => ({
		asyncValidator: (rule, value) => {
			if (value !== getFieldValue("password")) {
				return Promise.reject("Confirm password is different from Password!");
			}

			return Promise.resolve();
		},
	}),
];

//
export const FormWithDefault: ComponentStory<typeof Form> = (args) => {
	let formRef = useRef<IFormRef>(null);

	return (
		<div className="w-[800px]">
			<Form
				ref={formRef}
				{...args}
				// onFinish={(values) => {}}
				// onFinishFailed={(values, errors) => {}}
			>
				<Form.Item
					label="username:"
					name="username"
					rules={[{ type: "email", required: true }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="password:"
					name="password"
					valueName="value"
					valueChangeEventName="onChange"
					getValueFromEvent={(e) => e.target.value}
					rules={[{ type: "string", required: true, min: 3, max: 8 }]}
				>
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
				<Form.Item name="submitButton">
					<Button btnType="primary">Login</Button>
				</Form.Item>
			</Form>
		</div>
	);
};
FormWithDefault.storyName = "default";

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
					label="username:"
					name="username"
					rules={[{ type: "email", required: true }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="password:"
					name="password"
					valueName="value"
					valueChangeEventName="onChange"
					getValueFromEvent={(e) => e.target.value}
					rules={[{ type: "string", required: true, min: 3, max: 8 }]}
				>
					<Input type="password" />
				</Form.Item>
				<Form.Item
					label="confirm password:"
					name="confirmPassword"
					valueName="value"
					valueChangeEventName="onChange"
					getValueFromEvent={(e) => e.target.value}
					rules={confirmPasswordRules}
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
							// 	"username:",
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
