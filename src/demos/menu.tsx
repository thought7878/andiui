import Menu from "../components/Menu/menu";
import MenuItem from "../components/Menu/menuItem";

const MenuDemo = () => {
	return (
		<div>
			<div style={{ padding: 20 }}>
				<Menu
					defaultIndex={0}
					onSelect={(index) => {
						console.log(index);
					}}
				>
					<MenuItem index={0}>菜单1</MenuItem>
					<MenuItem index={1}>菜单2</MenuItem>
					<MenuItem index={2}>菜单3</MenuItem>
					<MenuItem index={4} disabled>
						菜单4
					</MenuItem>
				</Menu>
			</div>
			<div style={{ padding: 20 }}>
				<Menu
					defaultIndex={0}
					onSelect={(index) => {
						console.log(index);
					}}
					direction="vertical"
				>
					<MenuItem index={0}>菜单1</MenuItem>
					<MenuItem index={1}>菜单2</MenuItem>
					<MenuItem index={2}>菜单3</MenuItem>
					<MenuItem index={4} disabled>
						菜单4
					</MenuItem>
				</Menu>
			</div>
		</div>
	);
};

export default MenuDemo;
