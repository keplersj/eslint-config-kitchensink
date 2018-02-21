function createConfig() {
  return {
    extends: [
      "eslint:recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:node/recommended",
      "plugin:promise/recommended",
      "plugin:unicorn/recommended",
      "plugin:prettier/recommended"
    ],
    plugins: ["node", "promise", "unicorn"]
  };
}

module.exports = createConfig();
