// Import global Tailwind CSS styles
require("~/main.css");
require("typeface-lato");

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  head.htmlAttrs = { lang: "en" };
  // Add a meta tag
  head.meta.push(
    { charset: "utf-8" },
    { name: "author", content: "Web Matters" },
    { name: "description", content: "Raleigh's premier web consulting firm" },
    {
      name: "keywords",
      content: "websites, mobile, applications, marketing, SEO, UX, design"
    }
  );
  Vue.component("Layout", DefaultLayout);
}
