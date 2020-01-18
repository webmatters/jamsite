<template>
  <Layout>
    <main class="flex-wrapper">
      <h1>We build sites that convert cruisers into clients.</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
        excepturi labore tempore expedita, et iste tenetur suscipit explicabo!
        Dolores, aperiam non officia eos quod asperiores
      </p>

      <p class="home-links">
        <a
          href="https://github.com/gridsome/gridsome"
          target="_blank"
          rel="noopener"
          >GitHub</a
        >
      </p>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home',
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.flex-wrapper {
  flex: 1;
}
</style>
