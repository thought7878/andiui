import axiox from "axios";

export default function request(params: any) {
	return new Promise((resolve, reject) => {
		const instance = axiox.create({ timeout: 300 * 1000 });
		//
		instance.interceptors.request.use(
			(config: any) => {
				return config;
			},
			(error: any) => {
				return Promise.reject(error);
			}
		);
		//
		instance(params)
			.then((res) => {
				resolve(res);
			})
			.catch((error) => {
				reject(error);
			});
	});
}
