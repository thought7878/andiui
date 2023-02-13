import Button from "../components/Button";
import Form from "../components/Form";
import Item from "../components/Form/item";
import { CustomRule } from "../components/Form/useStore";
import Input from "../components/Input";

const FormDemo = () => {
	const confirmPasswordRules: CustomRule[] = [
		{ type: "string", required: true, min: 3, max: 8 },
		({ getFieldValue }) => ({
			asyncValidator(rule, value) {
				if (value !== getFieldValue("password")) {
					return Promise.reject("Confirm password is different from Password!");
				}
				return Promise.resolve();
			},
		}),
	];

	return (
		<div className="m-10 w-[600px]">
			<Form
			// defaultValues={{ username: "abc", password: "123", checkbox: true }}
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
					eventName="onChange"
					getValueFromEvent={(e) => e.target.value}
					rules={[{ type: "string", required: true, min: 3, max: 8 }]}
				>
					<Input type="password" />
				</Item>
				<Item
					label="重复密码："
					name="confirmPassword"
					valueName="value"
					eventName="onChange"
					getValueFromEvent={(e) => e.target.value}
					rules={confirmPasswordRules}
				>
					<Input type="password" />
				</Item>
				<Item name="noLabel">
					<Input placeholder="no label" />
				</Item>
				{/* <div className="flex"> */}
				<Item
					name="checkbox"
					valueName="checked"
					eventName="onChange"
					getValueFromEvent={(e) => e.target.checked}
				>
					<input type="checkbox" />
					{/* TODO 这样会有bug
          <span>
						<input type="checkbox" />
						同意协议
					</span> */}
				</Item>
				<span>
					注册即代表你同意协议<a href="#">用户协议</a>
				</span>
				{/* </div> */}
				<Item name="submitButton">
					<Button btnType="primary">登陆</Button>
				</Item>
			</Form>
		</div>
	);
};

export default FormDemo;
