import Menu from "../components/Menu/menu";
import MenuItem from "../components/Menu/menuItem";

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
					{/* <li>菜单0</li> */}
					<MenuItem>菜单1</MenuItem>
					<MenuItem>菜单2</MenuItem>
					<MenuItem>菜单3</MenuItem>
					<MenuItem disabled>菜单4</MenuItem>
					{/* <li>菜单5</li> */}
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
				</Menu>
			</div>
		</div>
	);
};

export default MenuDemo;
