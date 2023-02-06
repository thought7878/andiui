const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = (app) => {
	console.log("proxy*****************");
	/* app.use(
		"^/v2",
		createProxyMiddleware({
			target: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
			changeOrigin: true,
		})
	);
	app.use(
		"^/files",
		createProxyMiddleware({
			target: "http://0.0.0.0:3200",
			changeOrigin: true,
		})
	);
	app.use(
		"^/request",
		createProxyMiddleware({
			target: "http://localhost:3001",
			changeOrigin: true,
		})
	); */
};
