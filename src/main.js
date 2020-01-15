// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

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
