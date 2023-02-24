import Menu from "../components/Menu/";

const MenuDemo = () => {
	return (
		<div>
			<div className="menu-horizontal-container">
				<Menu defaultIndex="0" onSelect={(index) => {}}>
					<Menu.Item>菜单1</Menu.Item>
					<Menu.Item>菜单2</Menu.Item>
					<Menu.Item>菜单3</Menu.Item>
					<Menu.Item disabled>菜单4</Menu.Item>
					<Menu.SubMenu title="菜单4">
						<Menu.Item>菜单1</Menu.Item>
						<Menu.Item>菜单2</Menu.Item>
						<Menu.Item>菜单3</Menu.Item>
					</Menu.SubMenu>
				</Menu>
			</div>
			<div className="menu-vertical-container">
				<Menu
					defaultIndex="0"
					onSelect={(index) => {
						// console.log(index);
					}}
					direction="vertical"
				>
					<Menu.Item>菜单1</Menu.Item>
					<Menu.Item>菜单2</Menu.Item>
					<Menu.SubMenu title="菜单3" extended>
						<Menu.Item>子菜单1</Menu.Item>
						<Menu.Item>子菜单2</Menu.Item>
						<Menu.Item>子菜单3</Menu.Item>
					</Menu.SubMenu>
					<Menu.Item disabled>菜单4</Menu.Item>
					<Menu.Item>菜单5</Menu.Item>
				</Menu>
			</div>
		</div>
	);
};

export default MenuDemo;
