<template>
  <!-- Responsive NavBar -->
  <nav
    class="w-full bg-white md:flex md:justify-between md:items-center md:px-8 md:py-3"
  >
    <div class="flex justify-between items-center py-3 px-4 md:p-0">
      <!-- Brand logo -->
      <g-link to="/" class="text-primary text-4xl font-semibold"
        >Web Matters</g-link
      >
      <!-- Hamburger and Close Menu for mobile -->
      <div class="md:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="text-primary hover:text-secondary focus:outline-none"
        >
          <font-awesome v-if="isOpen" :icon="['fas', 'times']" />
          <font-awesome v-else :icon="['fas', 'bars']" />
        </button>
      </div>
    </div>
    <!-- Navigation Links -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      class="px-2 pt-2 pb-4 md:flex text-primary md:flex md:items-center"
    >
      <g-link
        class="block px-2 py-2 font-semibold rounded hover:text-secondary"
        to="/services/"
        >Services</g-link
      >
      <g-link
        class="block mt-1 px-2 py-2 font-semibold rounded hover:text-secondary md:mt-0 md:ml-6"
        to="/about/"
        >About</g-link
      >
      <g-link
        class="block mt-1 px-2 py-2 font-semibold rounded hover:text-secondary md:mt-0 md:ml-6"
        to="/portfolio/"
        >Our Work</g-link
      >
      <g-link
        class="inline-block mt-3 px-4 py-2 font-semibold rounded-full bg-cta text-white hover:bg-cta-hover md:mt-0 md:ml-6"
        to="/contact/"
      >
        Free Strategy Session
      </g-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

<style scoped></style>
