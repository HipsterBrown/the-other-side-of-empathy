const postcssPresetEnv = require("postcss-preset-env");
const postcssImport = require("postcss-import");
const cssnano = require("cssnano");
const postcssMedia = require("postcss-custom-media");

module.exports = {
  plugins: [postcssImport(), postcssMedia(), postcssPresetEnv(), cssnano()]
};
