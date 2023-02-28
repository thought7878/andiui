const path = require("path");

module.exports = {
	mode: "development",
	//入口文件
	// entry: path.join(__dirname, "./src/index.tsx"),
	entry: path.join(__dirname, "./src/index.css"),
	//出口文件
	output: {
		path: path.join(__dirname, "./dist"), // 打包结果输出路径
		// filename: "static/js/[name].js", // 每个输出js的名称
		filename: "static/js/[name].css", // 每个输出css的名称
		clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
		publicPath: "/", // 打包后文件的公共前缀路径
	},
	// loaders
	module: {
		rules: [
			{
				test: /.(ts|tsx)$/, // 匹配.ts, tsx文件
				use: {
					loader: "babel-loader",
					options: {
						// 执行顺序由右往左,所以先处理ts,再处理jsx,最后再试一下babel转换为低版本语法
						presets: [
							[
								"@babel/preset-env",
								{
									// 设置兼容目标浏览器版本,这里可以不写,babel-loader会自动寻找上面配置好的文件.browserslistrc
									// "targets": {
									//  "chrome": 35,
									//  "ie": 9
									// },
									useBuiltIns: "usage", // 根据配置的浏览器兼容,以及代码中使用到的api进行引入polyfill按需添加
									corejs: 3, // 配置使用core-js低版本
								},
							],
							"@babel/preset-react",
							"@babel/preset-typescript",
						],
					},
				},
			},

			{
				test: /\.js$/,
				loader: "babel-loader", // 新建一个.babelrc 默认调用这个文件
			},

			{
				test: /\.css$/,
				use: [
					// "postcss-loader",
					{
						loader: "postcss-loader",
						options: {
							//可以抽离出去单独postcss.config.js
							postcssOptions: {
								// config: true,
								// plugins: [require("autoprefixer")],
								plugins: {
									"postcss-import": {},
									"tailwindcss/nesting": {},
									tailwindcss: {},
									"postcss-preset-env": {
										autoprefixer: {
											flexbox: "no-2009",
										},
										stage: 1, //3
									},
								},
								/* plugins: [
									"postcss-import",
									"tailwindcss/nesting",
									// "postcss-nested",
									"postcss-simple-vars",
									"tailwindcss",
									"postcss-flexbugs-fixes",
									[
										"postcss-preset-env",
										{
											autoprefixer: {
												flexbox: "no-2009",
											},
											stage: 1, //3
										},
									],
								], */
							},
						},
					},
				],
			},
		],
	},
	/**在引入模块时不带文件后缀时，会来该配置数组里面依次添加后缀查找文件，因为ts不支持引入以 .ts, tsx为后缀的文件，所以要在extensions中配置，而第三方库里面很多引入js文件没有带后缀，所以也要配置下js */
	resolve: {
		extensions: [".js", ".tsx", ".ts"],
	},
};
