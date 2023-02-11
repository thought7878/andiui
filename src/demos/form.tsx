import Button from "../components/Button";
import Form from "../components/Form";
import Item from "../components/Form/item";
import Input from "../components/Input";

const FormDemo = () => {
	return (
		<div className="m-10 w-[600px]">
			<Form
				defaultValues={{ username: "abc", password: "123", checkbox: true }}
			>
				<Item label="用户名：" name="username">
					<Input />
				</Item>
				<Item
					label="密码："
					name="password"
					valueName="value"
					eventName="onChange"
					getValueFromEvent={(e) => e.target.value}
				>
					<Input type={"password"} />
				</Item>
				<Item name="noLabel">
					<Input placeholder="no label" />
				</Item>
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
				<Item name="submitButton">
					<Button btnType="primary">登陆</Button>
				</Item>
			</Form>
		</div>
	);
};

export default FormDemo;
