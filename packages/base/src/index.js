module.exports = {
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },


  env: {
    es2021: true,
    node: true
  },

  extends: ["./default/rules-json"],

  configs: {
    all: require("./configs/rules-all"),
    format: require("./configs/rules-format"),
    lint: require("./configs/rules-lint")
  }

}
