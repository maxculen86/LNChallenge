const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    // Ensure alias points to the src directory
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  // Update testMatch to look inside the src directory
  testMatch: ["<rootDir>/src/components/**/*.test.tsx"],
  collectCoverage: true,
  collectCoverageFrom: [
    // Update coverage path to look inside the src directory
    "src/components/**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
