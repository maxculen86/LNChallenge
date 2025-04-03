import { render, screen } from "@testing-library/react";
import { MainContent } from "./MainContent";
import { ProcessedTag, Article } from "@/types";

// Mock child components to isolate testing MainContent
jest.mock("@/components/TagList/TagList", () => ({
  TagList: ({ tags }: { tags: ProcessedTag[] }) => (
    <div data-testid="tag-list">{tags.length} tags</div>
  ),
}));
jest.mock("@/components/ArticleGrid/ArticleGrid", () => ({
  ArticleGrid: ({ articles }: { articles: Article[] }) => (
    <div data-testid="article-grid">{articles.length} articles</div>
  ),
}));
jest.mock("@/components/LoadMoreButton/LoadMoreButton", () => ({
  LoadMoreButton: ({ label }: { label: string }) => (
    <button data-testid="load-more-button">{label}</button>
  ),
}));

describe("MainContent", () => {
  const mockTags: ProcessedTag[] = [
    { text: "Tag 1", slug: "tag-1", count: 5 },
    { text: "Tag 2", slug: "tag-2", count: 3 },
  ];

  const mockArticles: Article[] = [
    {
      _id: "1",
      headlines: { basic: "Article 1" },
      promo_items: { basic: { url: "img1.jpg", width: 100, height: 100 } },
      taxonomy: { tags: [{ text: "Tag 1", slug: "tag-1" }] },
      display_date: "2024-01-01T00:00:00Z",
      subtype: "standard",
    },
    {
      _id: "2",
      headlines: { basic: "Article 2" },
      promo_items: { basic: { url: "img2.jpg", width: 100, height: 100 } },
      taxonomy: { tags: [{ text: "Tag 2", slug: "tag-2" }] },
      display_date: "2024-01-02T00:00:00Z",
      subtype: "standard",
    },
  ];

  const mockTitle = "Test Title";
  const mockMoreLabel = "Load More";

  it("renders the title", () => {
    render(
      <MainContent
        title={mockTitle}
        moreArticlesLabel={mockMoreLabel}
        processedTags={mockTags}
        displayArticles={mockArticles}
      />,
    );
    expect(
      screen.getByRole("heading", { level: 1, name: mockTitle }),
    ).toBeInTheDocument();
  });

  it("renders the TagList component with correct tags", () => {
    render(
      <MainContent
        title={mockTitle}
        moreArticlesLabel={mockMoreLabel}
        processedTags={mockTags}
        displayArticles={mockArticles}
      />,
    );
    expect(screen.getByTestId("tag-list")).toHaveTextContent("2 tags");
  });

  it("renders the ArticleGrid component with correct articles", () => {
    render(
      <MainContent
        title={mockTitle}
        moreArticlesLabel={mockMoreLabel}
        processedTags={mockTags}
        displayArticles={mockArticles}
      />,
    );
    expect(screen.getByTestId("article-grid")).toHaveTextContent("2 articles");
  });

  it("renders the LoadMoreButton component with the correct label", () => {
    render(
      <MainContent
        title={mockTitle}
        moreArticlesLabel={mockMoreLabel}
        processedTags={mockTags}
        displayArticles={mockArticles}
      />,
    );
    expect(screen.getByTestId("load-more-button")).toHaveTextContent(
      mockMoreLabel,
    );
  });
});
