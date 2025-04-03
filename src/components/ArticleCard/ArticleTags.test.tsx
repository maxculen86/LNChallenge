import { render, screen } from "@testing-library/react";
import { ArticleTags } from "./ArticleTags";

const mockTags = [
  { text: "Tag 1", slug: "tag-1" },
  { text: "Tag 2", slug: "tag-2" },
  { text: "Tag 3", slug: "tag-3" },
];

describe("ArticleTags", () => {
  it("renders all tags as links", () => {
    render(<ArticleTags tags={mockTags} />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
  });

  it("renders tags with correct href", () => {
    render(<ArticleTags tags={mockTags} />);
    const links = screen.getAllByRole("link");
    links.forEach((link, index) => {
      expect(link).toHaveAttribute("href", `/tema/${mockTags[index].slug}`);
    });
  });

  it("renders tags with correct text and commas", () => {
    const { container } = render(<ArticleTags tags={mockTags} />);
    const links = container.querySelectorAll(".tag-link");
    expect(links[0].textContent).toBe("Tag 1,");
    expect(links[1].textContent).toBe("Tag 2,");
    expect(links[2].textContent).toBe("Tag 3");
  });

  it("renders empty div when no tags provided", () => {
    const { container } = render(<ArticleTags tags={[]} />);
    const tagsContainer = container.querySelector(".article-tags");
    expect(tagsContainer?.children.length).toBe(0);
  });
});
