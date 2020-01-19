<template>
  <div class="container w-full mx-auto min-h-screen flex flex-col bg-white">
    <nav-bar id="header bg-white" />
    <main class="flex-grow">
      <slot />
    </main>
    <app-footer />
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
import AppFooter from '~/components/shared/AppFooter.vue'

export default {
  components: {
    Brand,
    NavBar,
    AppFooter,
  },
}
</script>

<style></style>
