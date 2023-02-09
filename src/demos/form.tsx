import Button from "../components/Button";
import Form from "../components/Form";
import Item from "../components/Form/item";
import Input from "../components/Input";

const FormDemo = () => {
	return (
		<div className="m-10 w-[600px]">
			<Form>
				<Item label="用户名：">
					<Input />
				</Item>
				<Item label="密码：">
					<Input type={"password"} />
				</Item>
				<Item>
					<Input placeholder="no label" />
				</Item>
				<Item>
					<Button btnType="primary">登陆</Button>
				</Item>
			</Form>
		</div>
	);
};

export default FormDemo;
