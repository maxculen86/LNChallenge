import "@testing-library/jest-dom";

// Mock next/image since it's not available in jest-environment-jsdom
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />;
  },
}));

// Mock next/link since it's not available in jest-environment-jsdom
jest.mock("next/link", () => ({
  __esModule: true,
  default: (props) => {
    return <a {...props}>{props.children}</a>;
  },
}));
