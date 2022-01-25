module.exports = {
  projects: [
    {
      preset: "./jest-preset/jest-preset.js",
      displayName: "node",
      testEnvironment: "node",
      testMatch: ["<rootDir>/test/**/?(*.)+(spec|test).[jt]s?(x)"],
    },
  ],
};
