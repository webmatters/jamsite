<template>
  <div class="flex flex-col min-h-screen antialiased text-gray-800 bg-gray-200">
    <header class="bg-white sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div class="flex justify-between items-center py-3 px-4 sm:p-0">
        <g-link to="/"><g-image src="~/assets/images/brand.svg" class="h-8 w-auto"/></g-link>
        <nav class="sm:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="text-gray-700 h-6 w-6 hover:text-gray-600 focus:outline-none"
          >
            <close v-if="isOpen" class="h-6 w-6"/>
            <hamburger v-else />
          </button>
        </nav>
      </div>
      <!-- Collapsed Links -->
      <div :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex">
        <g-link
          class="block px-2 py-1 font-semibold rounded hover:bg-gray-100"
          to="/about/"
          >About</g-link
        >
        <g-link
          class="block mt-1 px-2 py-1 font-semibold rounded hover:bg-gray-100 sm:mt-0 sm:ml-2"
          to="/services/"
          >Services</g-link
        >
        <g-link
          class="block mt-1 px-2 py-1 font-semibold rounded hover:bg-gray-100 sm:mt-0 sm:ml-2"
          to="/portfolio/"
          >Our Work</g-link
        >
        <g-link
          class="block mt-1 px-2 py-1 font-semibold rounded hover:bg-gray-100 sm:mt-0 sm:ml-2"
          to="/contact/"
          >Contact</g-link
        >
      </div>
    </header>

    <slot />

    <footer class="bg-gray-400 text-center py-6">
      {{ new Date().getFullYear() }} — <strong>Web Matters</strong>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Brand from "~/assets/images/brand.svg";
import Hamburger from "~/assets/images/hamburger.svg";
import Close from "~/assets/images/close.svg";

export default {
  components: {
    Brand,
    Hamburger,
    Close
  },
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style>
body {
  font-family: Lato, Roboto, -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
</style>
