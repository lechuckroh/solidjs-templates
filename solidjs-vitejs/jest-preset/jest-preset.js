module.exports = {
  transformIgnorePatterns: ["node_modules/(?!solid-js.*|.*(?<=.[tj]sx))$"],
  testEnvironment: "node",
  transform: {
    "\\.[jt]s$": "babel-jest",
    "\\.[jt]sx$": require.resolve("./transform"),
  },
};
