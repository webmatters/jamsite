// Import global Tailwind CSS styles
require('~/main.css')
require('typeface-lato')

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

import DefaultLayout from '~/layouts/Default.vue'

config.autoAddCss = false
library.add(faGithub, faTwitter, faBars, faTimes)

export default function(Vue, { router, head, isClient }) {
  head.htmlAttrs = { lang: 'en' }
  // Add a meta tag
  head.meta.push(
    { charset: 'utf-8' },
    { name: 'author', content: 'Web Matters' },
    { name: 'description', content: "Raleigh's premier web consulting firm" },
    {
      name: 'keywords',
      content: 'websites, mobile, applications, marketing, SEO, UX, design',
    }
  )
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome', FontAwesomeIcon)
}
