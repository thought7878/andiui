import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Alert from ".";

describe("Alert component", () => {
	test.only("click close button to remove Alert", () => {
		render(<Alert>alert component</Alert>);

		const btn = screen.getByTestId("close-btn");
		userEvent.click(btn);
		screen.debug();
		// expect(screen.queryByTestId("alert")).toBeNull();

		// screen.debug(screen.queryByTestId("alert"));
	});
});
