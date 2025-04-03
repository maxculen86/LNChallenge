import { render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { Article } from "@/types"; // Import Article type

// Mock the ArticleCard component instead of MostReadRecipes
jest.mock("@/components/ArticleCard/ArticleCard", () => ({
  ArticleCard: ({ article }: { article: Article }) => (
    <div data-testid="article-card-mock">{article.headlines.basic}</div>
  ),
}));

describe("Sidebar", () => {
  const mockTitle = "Most Read Recipes";

  it("renders the desktop banners", () => {
    render(<Sidebar mostReadRecipesTitle={mockTitle} />);
    // Find elements with the specific banner classes
    const banners = screen.getAllByText("", { selector: "div.banner.--desktop.--large" });
    // Expect two such banners
    expect(banners).toHaveLength(2);
  });
});
