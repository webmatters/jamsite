<template>
  <Layout>
    <!-- Hero Section -->
    <div
      class="container px-8 mx-auto flex flex-wrap flex-col md:flex-row items-center py-20 bg-gray-200"
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
    <!-- Why Web Matters -->
    <div class="flex flex-wrap items-center py-20 mt-6 bg-white">
      <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
        <div
          class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
        >
          <font-awesome :icon="['fas', 'users']" class="text-xl" />
        </div>
        <h3 class="text-3xl mb-2 font-semibold leading-normal">
          Working with us is easy
        </h3>
        <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
          The current rate of ocean chemistry change seems to be unprecedented
          in Earth's geological history, making it unclear how well marine
          ecosystems will adapt to the shifting conditions of the near future.
        </p>
        <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
          Paleoceanography is the study of the history of the oceans in the
          geologic past with regard to circulation, chemistry, biology, geology
          and patterns of sedimentation and biological productivity.
        </p>
        <a
          href="https://www.creative-tim.com/framework/tailwind-starter-kit"
          class="font-bold text-gray-800 mt-8"
          >Call us now!</a
        >
      </div>
      <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600"
        >
          <img
            alt="..."
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
            class="w-full align-middle rounded-t-lg"
          />
          <blockquote class="relative p-8 mb-4">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              class="absolute left-0 w-full block"
              style="height: 95px; top: -94px;"
            >
              <polygon
                points="-30,95 583,95 583,65"
                class="text-pink-600 fill-current"
              ></polygon>
            </svg>
            <h4 class="text-xl font-bold text-white">
              Top Notch Services
            </h4>
            <p class="text-md font-light mt-2 text-white">
              The Arctic Ocean freezes every winter and much of the sea-ice then
              thaws every summer, and that process will continue whatever
              happens.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
    <!-- Growing Company -->
    <section class="relative py-20 bg-gray-200">
      <div class="container mx-auto px-4">
        <div class="items-center flex flex-wrap">
          <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt="..."
              class="max-w-full rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
            />
          </div>
          <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div class="md:pr-12">
              <div
                class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"
              >
                <font-awesome :icon="['fas', 'rocket']" class="text-xl" />
              </div>
              <h3 class="text-3xl font-semibold">A growing company</h3>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                Since the early ocean expeditions in oceanography, a major
                interest was the study of the ocean currents and temperature
                measurements.
              </p>
              <ul class="list-none mt-6">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                        ><font-awesome :icon="['fab', 'html5']"
                      /></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">
                        Carefully crafted websites
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                        ><font-awesome :icon="['fab', 'js']"
                      /></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">Amazing applications</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                        ><font-awesome :icon="['fas', 'mobile-alt']"
                      /></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">Dynamic mobile apps</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Build Something -->
    <section class="pb-20 relative block bg-gray-900">
      <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <div class="flex flex-wrap text-center justify-center">
          <div class="w-full lg:w-6/12 px-4">
            <h2 class="text-4xl font-semibold text-white">
              Build something with us
            </h2>
            <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
              Put the potentially record low maximum sea ice extent tihs year
              down to low ice. According to the National Oceanic and Atmospheric
              Administration, Ted, Scambos.
            </p>
          </div>
        </div>
        <div class="flex flex-wrap mt-12 justify-center">
          <div class="w-full lg:w-3/12 px-4 text-center">
            <div
              class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
            >
              <font-awesome :icon="['fas', 'medal']" class="text-xl" />
            </div>
            <h6 class="text-xl mt-5 font-semibold text-white">
              Excellent Services
            </h6>
            <p class="mt-2 mb-4 text-gray-500">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="w-full lg:w-3/12 px-4 text-center">
            <div
              class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
            >
              <font-awesome :icon="['fas', 'poll']" class="text-xl" />
            </div>
            <h5 class="text-xl mt-5 font-semibold text-white">
              Grow your market
            </h5>
            <p class="mt-2 mb-4 text-gray-500">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="w-full lg:w-3/12 px-4 text-center">
            <div
              class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
            >
              <font-awesome :icon="['fas', 'lightbulb']" class="text-xl" />
            </div>
            <h5 class="text-xl mt-5 font-semibold text-white">Launch time</h5>
            <p class="mt-2 mb-4 text-gray-500">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="relative block py-24 lg:pt-0 bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
          <div class="w-full lg:w-6/12 px-4">
            <div
              class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
            >
              <div class="flex-auto p-5 lg:p-10">
                <h4 class="text-2xl font-semibold">
                  Want a free strategy session?
                </h4>
                <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                  Provide information below and we'll get back to you within 24
                  hours.
                </p>
                <div class="relative w-full mb-3 mt-8">
                  <label
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    for="full-name"
                    >Full Name</label
                  ><input
                    type="text"
                    class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Full Name"
                    style="transition: all 0.15s ease 0s;"
                  />
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    for="email"
                    >Email</label
                  ><input
                    type="email"
                    class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Email"
                    style="transition: all 0.15s ease 0s;"
                  />
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    for="message"
                    >Message</label
                  ><textarea
                    rows="4"
                    cols="80"
                    class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Type a message..."
                  ></textarea>
                </div>
                <div class="text-center mt-6">
                  <button
                    class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style="transition: all 0.15s ease 0s;"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
