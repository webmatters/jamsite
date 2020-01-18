<template>
  <!-- Responsive NavBar -->
  <nav
    class="w-full bg-white sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
  >
    <div class="flex justify-between items-center py-3 px-4 sm:p-0">
      <!-- Brand logo -->
      <g-link to="/"
        ><g-image src="~/assets/images/brand.svg" class="h-8 w-auto"
      /></g-link>
      <!-- Hamburger and Close Menu for mobile -->
      <div class="sm:hidden">
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
      class="px-2 pt-2 pb-4 sm:flex text-primary sm:flex sm:items-center"
    >
      <g-link
        class="block px-2 py-2 font-semibold rounded hover:text-secondary"
        to="/services/"
        >Services</g-link
      >
      <g-link
        class="block mt-1 px-2 py-2 font-semibold rounded hover:text-secondary sm:mt-0 sm:ml-6"
        to="/about/"
        >About</g-link
      >
      <g-link
        class="block mt-1 px-2 py-2 font-semibold rounded hover:text-secondary sm:mt-0 sm:ml-6"
        to="/portfolio/"
        >Our Work</g-link
      >
      <g-link
        class="inline-block mt-3 px-4 py-2 font-semibold rounded-full bg-cta text-white hover:bg-cta-hover sm:mt-0 sm:ml-6"
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
