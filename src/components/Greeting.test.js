import userEvent from "@testing-library/user-event"
import Greeting from "./Greeting"
import { render, screen } from "@testing-library/react"

describe("greeting test suite", () => {
    test("check sentence HELLO", () => {
        render(<Greeting />)
        const value = screen.getByText("Hello")
        expect(value).toBeInTheDocument();
    })

    test("checking Button not clicked, haven't clicked", () => {
      render(<Greeting />);
      const value = screen.getByText("haven't clicked");
      expect(value).toBeInTheDocument();
    });

    test("checking 'changed' when button is clicked", () => {
      render(<Greeting />);
      const btn = screen.getByRole("button");
      userEvent.click(btn);
      const value = screen.getByText("clicked", { exact: false });
      expect(value).toBeInTheDocument();
    });
})