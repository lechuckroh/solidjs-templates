module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["solid", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:solid/recommended",
    "prettier",
  ],
};
