const { DateTime } = require("luxon");

module.exports = function (eleventyConfig){
    eleventyConfig.setTemplateFormats([
        // Templates:
        "html",
        "njk",
        "md",
        // Static Assets:
        "css",
        "jpeg",
        "jpg",
        "png",
        "svg",
        "woff",
        "woff2"
      ]);

    eleventyConfig.addPassthroughCopy("src/admin");
    eleventyConfig.addFilter("postDate", (dateObj) => { return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)});
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}
