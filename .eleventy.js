const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  const Image = require("@11ty/eleventy-img");
  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}