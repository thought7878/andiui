import Menu from "../components/Menu/menu";
import MenuItem from "../components/Menu/menuItem";
import Submenu from "../components/Menu/submenu";

const MenuDemo = () => {
	return (
		<div>
			<div style={{ padding: 20 }}>
				<Menu
					defaultIndex={0}
					onSelect={(index) => {
						console.log("index:", index);
					}}
				>
					<MenuItem>菜单1</MenuItem>
					<MenuItem>菜单2</MenuItem>
					<MenuItem>菜单3</MenuItem>
					<MenuItem disabled>菜单4</MenuItem>
					<Submenu title="菜单4">
						<MenuItem>菜单1</MenuItem>
						<MenuItem>菜单2</MenuItem>
						<MenuItem>菜单3</MenuItem>
					</Submenu>
				</Menu>
			</div>
			<div style={{ padding: 20 }}>
				<Menu
					defaultIndex={0}
					onSelect={(index) => {
						// console.log(index);
					}}
					direction="vertical"
				>
					<MenuItem>菜单1</MenuItem>
					<MenuItem>菜单2</MenuItem>
					<MenuItem>菜单3</MenuItem>
					<MenuItem disabled>菜单4</MenuItem>
					<Submenu title="菜单5">
						<MenuItem>菜单1</MenuItem>
						<MenuItem>菜单2</MenuItem>
						<MenuItem>菜单3</MenuItem>
					</Submenu>
				</Menu>
			</div>
		</div>
	);
};

export default MenuDemo;
