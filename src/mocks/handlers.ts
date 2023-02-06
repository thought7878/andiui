import { rest } from "msw";
import { delayedResponse } from "./res/delayed-response";

export const handlers = [
	//
	rest.post("http://localhost:3000/request/upload", (req, res, ctx) => {
		// This mocked response has realistic
		// response time automatically.
		return delayedResponse(
			ctx.status(503),
			ctx.json({
				results: [
					{
						name: "andi",
						age: 32,
					},
				],
			})
		);
	}),
];
