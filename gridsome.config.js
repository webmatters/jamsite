const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const autoprefixer = require("autoprefixer");

const postcssPlugins = [tailwind(), autoprefixer()];

if (process.env.NODE_ENV === "production") postcssPlugins.push(purgecss());

module.exports = {
  siteName: "Web Matters",
  siteUrl: "https://www.webmatters.io",
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  }
};
