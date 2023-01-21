import Menu from "../components/Menu/menu";
import MenuItem from "../components/Menu/menuItem";
import Submenu from "../components/Menu/submenu";

const MenuDemo = () => {
	return (
		<div>
			<div className="menu-horizontal-container">
				<Menu defaultIndex="0" onSelect={(index) => {}}>
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
			<div className="menu-vertical-container">
				<Menu
					defaultIndex="0"
					onSelect={(index) => {
						// console.log(index);
					}}
					direction="vertical"
				>
					<MenuItem>菜单1</MenuItem>
					<MenuItem>菜单2</MenuItem>
					<Submenu title="菜单3" extended>
						<MenuItem>子菜单1</MenuItem>
						<MenuItem>子菜单2</MenuItem>
						<MenuItem>子菜单3</MenuItem>
					</Submenu>
					<MenuItem disabled>菜单4</MenuItem>
					<MenuItem>菜单5</MenuItem>
				</Menu>
			</div>
		</div>
	);
};

export default MenuDemo;
