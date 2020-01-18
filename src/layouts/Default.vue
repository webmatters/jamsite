<template>
  <div class="flex flex-col min-h-screen antialiased text-gray-800 bg-gray-200">
    <nav-bar />
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
import Brand from '~/assets/images/brand.svg'
import NavBar from '~/components/shared/NavBar.vue'

export default {
  components: {
    Brand,
    NavBar,
  },
}
</script>

<style>
body {
  font-family: Lato, Roboto, -apple-system, system-ui, BlinkMacSystemFont,
    'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
</style>
