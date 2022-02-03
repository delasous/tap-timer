module.exports = {
  clearMocks: true,
  rootDir: "./src",
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  transform: {
    "\\.(js)?$": "babel-jest"
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "\\.pnp\\.[^\\/]+$"
  ],
  // collectCoverage: true,
  // collectCoverageFrom: undefined,
  // coverageDirectory: "coverage",
  // coveragePathIgnorePatterns: [
  //   "/node_modules/"
  // ],
  // coverageProvider: "v8",
};
