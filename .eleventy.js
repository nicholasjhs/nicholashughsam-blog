const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = eleventyConfig => {
    eleventyConfig.addPlugin(pluginRss);
    const english = new Intl.DateTimeFormat("en");
    eleventyConfig.addFilter("niceDate", function(d) {
	return english.format(d);
    });
	return {
		dir: {
			input: 'blog'
		}
	}

};