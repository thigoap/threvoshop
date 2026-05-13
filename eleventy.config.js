module.exports = async function (eleventyConfig) {
    // Order matters, put this at the top of your configuration file.
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.setIncludesDirectory("_includes");
    eleventyConfig.setDataDirectory("_data")
    eleventyConfig.setOutputDirectory("_site");
    
	eleventyConfig.setNunjucksEnvironmentOptions({
		throwOnUndefined: true,
		autoescape: true,
	});
    eleventyConfig.addPassthroughCopy("src/static/assets");
    eleventyConfig.addPassthroughCopy("src/static/posts");

    const { HtmlBasePlugin } = await import("@11ty/eleventy");
	eleventyConfig.addPlugin(HtmlBasePlugin);
};

// module.exports.config = {
// 	pathPrefix: "/js_threvo-shop/",
// }