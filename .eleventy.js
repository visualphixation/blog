const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(pluginRss);
  const Image = require("@11ty/eleventy-img");

  // filter a random post to show on the homepage
  eleventyConfig.addFilter("randomPost", (arr) => {
    arr.sort(() => {
      return 0.5 - Math.random();
    });
    return arr.slice(0, 1);
  })

  // configure the post date
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  // Universal Shortcodes (Adds to Liquid, Nunjucks, Handlebars)
  eleventyConfig.addPairedShortcode("user", function (bioContent, name, twitterUsername) {
    return `<div class="user">
      <div class="user_name">${name}</div>
      <div class="user_twitter">@${twitterUsername}</div>
      <div class="user_bio">${bioContent}</div> 
    </div>`;
  });
  // Universal Shortcodes (Adds to Liquid, Nunjucks, Handlebars)
  eleventyConfig.addShortcode("caption", function (captionTitle, otherValue) {
    return `<div class="user">
<div class="user_name">${captionTitle}</div>
<div class="user_twitter">${otherValue}</div>
<div class="user_bio">meh2</div>
</div>`;
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}