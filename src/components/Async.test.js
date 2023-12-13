import { render, screen } from "@testing-library/react";
import Async from "../components/Async";

describe("async test suite", () => {
  test("render post if request", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 1, title: "hi" }],
    });
    render(<Async />);
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
