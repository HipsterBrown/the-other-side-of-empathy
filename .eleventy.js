const moment = require("moment");

module.exports = function(config) {
  config.addHandlebarsHelper("shorten", function(text, maxLength) {
    return text.length >= maxLength ? text.slice(0, -3) + "..." : text;
  });

  config.addHandlebarsHelper("formatDate", function(date) {
    return moment(Date.parse(date)).format("DD MMM YYYY");
  });

  config.addHandlebarsHelper("prevPage", function(num) {
    return num - 1;
  });

  config.addHandlebarsHelper("nextPage", function(num) {
    return num + 1;
  });

  config.addCollection("posts", collection =>
    collection.getFilteredByGlob("posts/*.md")
  );
};
