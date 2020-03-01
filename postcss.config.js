const postcssPresetEnv = require("postcss-preset-env");
const postcssImport = require("postcss-import");
const cssnano = require("cssnano");

module.exports = {
  plugins: [postcssImport(), postcssPresetEnv(), cssnano()]
};
