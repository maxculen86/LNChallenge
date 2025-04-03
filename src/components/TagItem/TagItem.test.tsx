import { render, screen } from "@testing-library/react";
import { TagItem } from "./TagItem";
import { ProcessedTag } from "@/types";

const mockTag: ProcessedTag = {
  slug: "test-tag",
  text: "Test Tag",
  count: 5,
};

describe("TagItem", () => {
  it("renders tag with correct text and count", () => {
    render(<TagItem tag={mockTag} />);
    const listItem = screen.getByRole("listitem");
    expect(listItem).toHaveTextContent("Test Tag (5)");
  });

  it("renders link with correct href", () => {
    render(<TagItem tag={mockTag} />);
    const listItem = screen.getByRole("listitem");
    expect(listItem).toHaveAttribute("href", "/tema/test-tag");
  });
});
