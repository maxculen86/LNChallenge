import { render, screen, fireEvent } from "@testing-library/react";
import { LoadMoreButton } from "./LoadMoreButton";

describe("LoadMoreButton", () => {
  it("renders with the provided label", () => {
    render(<LoadMoreButton label="Load More" />);
    expect(screen.getByRole("button")).toHaveTextContent("Load More");
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<LoadMoreButton label="Load More" onClick={handleClick} />);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalled();
  });
});
