const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "node", // Keep node environment for API/lib tests
  moduleNameMapper: {
    // Ensure alias points to the src directory
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  // Update testMatch to look inside the src directory
  testMatch: ["<rootDir>/src/lib/**/*.test.ts"],
  collectCoverage: true,
  collectCoverageFrom: [
    // Update coverage path to look inside the src directory
    "src/lib/**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
};

module.exports = createJestConfig(customJestConfig);
