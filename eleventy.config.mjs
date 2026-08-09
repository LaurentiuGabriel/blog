import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  // Rewrites every root-relative URL in the output HTML with `pathPrefix`,
  // so the site works both locally and under github.io/blog/.
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addWatchTarget("css");

  // Screenshots and other post images. Reference them root-relative
  // (`/images/foo.png`) so HtmlBasePlugin can add the `/blog/` prefix — a
  // relative path would resolve against the post's own `/articles/<slug>/` URL.
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addWatchTarget("images");

  // Images below the fold shouldn't block first paint.
  eleventyConfig.amendLibrary("md", (md) => {
    const renderImage = md.renderer.rules.image;
    md.renderer.rules.image = (tokens, idx, options, env, self) => {
      tokens[idx].attrSet("loading", "lazy");
      tokens[idx].attrSet("decoding", "async");
      return renderImage(tokens, idx, options, env, self);
    };
  });

  eleventyConfig.addFilter("readableDate", (value) =>
    new Date(value).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    })
  );

  eleventyConfig.addFilter("isoDate", (value) =>
    new Date(value).toISOString().slice(0, 10)
  );

  // Newest first.
  eleventyConfig.addCollection("posts", (collectionApi) =>
    collectionApi.getFilteredByTag("post").reverse()
  );

  return {
    pathPrefix: "/blog/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
}
