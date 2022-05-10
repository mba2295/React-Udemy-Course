import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Testing the fetching of list", () => {
  test("renders list after the fetch", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => {
        return [{ id: "1", title: "Sample test post" }];
      },
    });
    render(<Async />);
    const listItems = await screen.findAllByRole(
      "listitem",
      {},
      { timeout: 3000 }
    );
    expect(listItems).not.toHaveLength(0);
  });
});
