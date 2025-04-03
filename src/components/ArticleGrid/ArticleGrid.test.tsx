import { render, screen } from "@testing-library/react";
import { ArticleGrid } from "./ArticleGrid";
import { Article } from "@/types";
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";

const mockRouter = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  isLocaleDomain: false,
  isReady: true,
  isPreview: false,
  locale: "es",
  defaultLocale: "es",
  locales: ["es", "en"],
};

describe("ArticleGrid", () => {
  const mockArticles: Article[] = [
    {
      _id: "1",
      headlines: { basic: "Test Article 1" },
      taxonomy: {
        tags: [
          { slug: "test-tag-1-tid123", text: "Test Tag 1" },
          { slug: "test-tag-2-tid456", text: "Test Tag 2" },
        ],
      },
      promo_items: {
        basic: {
          url: "https://resizer.glanacion.com/test-image-1.jpg",
          width: 800,
          height: 600,
        },
      },
      display_date: "2024-04-01T12:00:00Z",
      subtype: "7",
    },
    {
      _id: "2",
      headlines: { basic: "Test Article 2" },
      taxonomy: {
        tags: [{ slug: "test-tag-3-tid789", text: "Test Tag 3" }],
      },
      promo_items: {
        basic: {
          url: "https://resizer.glanacion.com/test-image-2.jpg",
          width: 800,
          height: 600,
        },
      },
      display_date: "2024-04-02T12:00:00Z",
      subtype: "7",
    },
  ];

  const renderWithRouter = (component: React.ReactNode) => {
    return render(
      <RouterContext.Provider value={mockRouter}>
        {component}
      </RouterContext.Provider>,
    );
  };

  it("renders all articles", () => {
    renderWithRouter(<ArticleGrid articles={mockArticles} />);
    expect(screen.getAllByRole("article")).toHaveLength(mockArticles.length);
  });

  it("renders the correct number of articles", () => {
    renderWithRouter(<ArticleGrid articles={mockArticles} />);
    const articleElements = screen.getAllByRole("article");
    expect(articleElements).toHaveLength(mockArticles.length);
  });

  it("applies correct CSS classes", () => {
    renderWithRouter(<ArticleGrid articles={mockArticles} />);
    const articleElements = screen.getAllByRole("article");
    articleElements.forEach((article) => {
      expect(article).toHaveClass("mod-caja-nota", "w-100-mobile");
    });
  });
});
