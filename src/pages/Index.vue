<template>
  <Layout>
    <div
      class="container px-8 mx-auto flex flex-wrap flex-col md:flex-row items-center pt-24"
    >
      <!--Left Col-->
      <div
        class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
      >
        <h1 class="my-4 text-5xl font-bold leading-tight">
          Web apps that move the needle
        </h1>
        <h2 class="leading-normal text-2xl mb-8">
          <p>Thoughtfully designed,</p>
          <p>Efficiently Developed,</p>
          <p>Reasonably Priced</p>
        </h2>

        <button
          class="mx-auto lg:mx-0 bg-cta text-white hover:bg-cta-hover font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        >
          Learn More
        </button>
      </div>
      <!--Right Col-->
      <div class="w-full md:w-3/5 py-6 text-center">
        <g-image src="~/assets/images/hero.png" class="w-full md:w-4/5 z-50" />
        <img class="w-full md:w-4/5 z-50" />
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home',
  },
}
</script>

<style></style>
