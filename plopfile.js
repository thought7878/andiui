module.exports = (plop) => {
	//生成器的名字
	plop.setGenerator("component", {
		description: "create a component",
		prompts: [
			{
				type: "input",
				name: "name", //输入返回值的key
				message: "component name", //屏幕上的提示
				default: "MyComponent", //默认答案
			},
		],
		actions: [
			{
				type: "add", //添加文件
				path: "src/components/{{name}}/{{name}}.tsx", //添加文件的路径
				templateFile: "plop-templates/component.hbs", //指定模板文件
			},
			{
				type: "add", //添加文件
				path: "src/components/{{name}}/_{{name}}.scss", //添加文件的路径
				templateFile: "plop-templates/component.scss.hbs", //指定模板文件
			},
		],
	});
};
