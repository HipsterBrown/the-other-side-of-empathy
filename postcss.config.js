const postcssPresetEnv = require("postcss-preset-env");
const postcssImport = require("postcss-import");
const cssnano = require("cssnano");
const postcssMedia = require("postcss-custom-media");
const tailwind = require("tailwindcss");

module.exports = {
  plugins: [
    tailwind,
    postcssImport(),
    postcssMedia(),
    postcssPresetEnv(),
    cssnano()
  ]
};
