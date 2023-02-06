import { context, createResponseComposition } from "msw";

export const delayedResponse = createResponseComposition(undefined, [
	context.delay(2000),
]);
