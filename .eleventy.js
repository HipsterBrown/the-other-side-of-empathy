const pluginRss = require("@11ty/eleventy-plugin-rss");
const format = require("date-fns/format");

module.exports = function(config) {
  config.addHandlebarsHelper("shorten", function(text, maxLength) {
    return text.length >= maxLength ? text.slice(0, -3) + "..." : text;
  });

  config.addHandlebarsHelper("formatDate", function(date) {
    return format(date, "dd MMM yyyy");
  });

  config.addHandlebarsHelper("prevPage", function(num) {
    return num - 1;
  });

  config.addHandlebarsHelper("nextPage", function(num) {
    return num + 2;
  });

  config.addCollection("posts", collection =>
    collection.getFilteredByGlob("posts/*.md").reverse()
  );

  config.addPlugin(pluginRss);
};
