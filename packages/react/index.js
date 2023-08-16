module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [''],
  configs: {
      all: require("./configs/rules-all"),
      format: require("./configs/rules-format"),
      lint: require("./configs/rules-lint")
  }
};
