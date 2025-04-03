import { render, screen } from "@testing-library/react";
import { ArticleCard } from "./ArticleCard";
import { Article } from "@/types";

describe("ArticleCard", () => {
  const mockArticle: Article = {
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
        { text: "Tag 1", slug: "tag-1" },
        { text: "Tag 2", slug: "tag-2" },
      ],
    },
    display_date: "2024-03-20T12:00:00Z",
    subtype: "test",
  };

  it("renders the article title", () => {
    render(<ArticleCard article={mockArticle} />);
    expect(screen.getByText(/Test Article/)).toBeInTheDocument();
  });

  it("renders the article image", () => {
    render(<ArticleCard article={mockArticle} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src");
    expect(img).toHaveAttribute("alt", "Test Article");
  });

  it("renders the formatted date", () => {
    render(<ArticleCard article={mockArticle} />);
    expect(screen.getByText("20 de marzo de 2024")).toBeInTheDocument();
  });

  it("links title and image to first tag", () => {
    render(<ArticleCard article={mockArticle} />);
    const links = screen
      .getAllByRole("link")
      .filter((link) => !link.className.includes("tag-link"));
    links.forEach((link) => {
      expect(link).toHaveAttribute("href", "/tema/tag-1");
    });
  });

  it("renders article with empty tag link when no tags are present", () => {
    const articleWithoutTags = {
      ...mockArticle,
      taxonomy: { tags: [] },
    };
    render(<ArticleCard article={articleWithoutTags} />);

    const mainLinks = screen
      .getAllByRole("link")
      .filter((link) => !link.classList.contains("tag-link"));
    mainLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "/tema/");
    });
  });

  it("applies correct CSS classes", () => {
    render(<ArticleCard article={mockArticle} />);
    expect(screen.getByTestId("article-card")).toHaveClass(
      "mod-caja-nota",
      "w-100-mobile",
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveClass(
      "com-title-acu",
    );
    expect(screen.getByRole("heading", { level: 4 })).toHaveClass("com-date");
  });
});
