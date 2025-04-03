import { render, screen } from "@testing-library/react";
import { ArticleImage } from "./ArticleImage";
const mockArticle = {
  _id: "1",
  headlines: {
    basic: "Test Article",
  },
  promo_items: {
    basic: {
      url: "https://example.com/image.jpg",
      width: 1200,
      height: 800,
    },
  },
  taxonomy: {
    tags: [
      {
        text: "Test Tag",
        slug: "test-tag",
      },
    ],
  },
  display_date: "2024-03-20T12:00:00Z",
  subtype: "test",
};

describe("ArticleImage", () => {
  it("renders the image with correct attributes", () => {
    render(<ArticleImage article={mockArticle} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src");
    expect(img).toHaveAttribute("alt", "Test Article");
  });

  it("links to the first tag", () => {
    render(<ArticleImage article={mockArticle} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/tema/test-tag");
  });

  it("returns null when no image URL is provided", () => {
    const articleWithoutImage = {
      ...mockArticle,
      promo_items: {
        basic: {
          url: "",
          width: 0,
          height: 0,
        },
      },
    };
    const { container } = render(
      <ArticleImage article={articleWithoutImage} />,
    );
    expect(container).toBeEmptyDOMElement();
  });
});
