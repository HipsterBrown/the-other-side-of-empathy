const postcssPresetEnv = require("postcss-preset-env");
const postcssImport = require("postcss-import");
const cssnano = require("cssnano");
const tailwind = require("tailwindcss");

const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: ["./_includes/**/*.hbs"],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  plugins: [
    tailwind,
    postcssImport(),
    postcssPresetEnv(),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
    cssnano()
  ]
};
