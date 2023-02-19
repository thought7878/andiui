import { useRef } from "react";
import Button from "../components/Button";
import Form, { IFormRef } from "../components/Form";
import Item from "../components/Form/item";
import { CustomRule } from "../components/Form/useStore";
import Input from "../components/Input";

const FormDemo = () => {
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

	let formRef = useRef<IFormRef>(null);

	return (
		<div className="m-10 w-[600px]">
			<Form
				ref={formRef}
				onFinish={(values) => {
					console.log("onFinish:", values);
				}}
				onFinishFailed={(values, errors) => {
					console.log("onFinishFailed:", [values, errors]);
				}}
				// initialValues={{
				// 	username: "abc",
				// 	password: "123",
				// 	confirmPassword: "111",
				// 	// agreement: true,
				// }}
			>
				<Item
					label="用户名："
					name="username"
					rules={[{ type: "email", required: true }]}
				>
					<Input />
				</Item>
				<Item
					label="密码："
					name="password"
					valueName="value"
					valueChangeEventName="onChange"
					getValueFromEvent={(e) => e.target.value}
					rules={[{ type: "string", required: true, min: 3, max: 8 }]}
				>
					<Input type="password" />
				</Item>
				<Item
					label="重复密码："
					name="confirmPassword"
					valueName="value"
					valueChangeEventName="onChange"
					getValueFromEvent={(e) => e.target.value}
					rules={confirmPasswordRules}
				>
					<Input type="password" />
				</Item>
				{/* <Item name="noLabel">
					<Input placeholder="no label" />
				</Item> */}
				<div className="flex pl-[30%]">
					<Item
						name="agreement"
						valueName="checked"
						valueChangeEventName="onChange"
						getValueFromEvent={(e) => e.target.checked}
						rules={[{ type: "enum", enum: [true], message: "请同意协议" }]}
					>
						<input type="checkbox" className="mr-1" />
					</Item>
					<span>
						注册即代表你同意协议<a href="#">用户协议</a>
					</span>
				</div>
				<Item name="submitButton">
					<Button btnType="primary">登陆</Button>
				</Item>
				<Item name="submitButton">
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
						重置
					</Button>
				</Item>
			</Form>
		</div>
	);
};

export default FormDemo;
