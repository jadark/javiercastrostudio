
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lato:400,700'
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    // 'normalize.css/normalize.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
 modules: [
   '@nuxtjs/axios',
   '@nuxtjs/firebase',
  ],
  firebase: {
    config: {
      apiKey: 'AIzaSyDc2329q2OrTOng6a5M_J1DzuNZNYQFLLk',
      authDomain: 'javierstudio-6ee10.firebaseapp.com',
      databaseURL: 'https://javierstudio-6ee10.firebaseio.com',
      projectId: 'javierstudio-6ee10',
      storageBucket: 'javierstudio-6ee10.appspot.com',
      messagingSenderId: '788225458451',
      appId: '1:788225458451:web:ed50285b84e31f29ecdae6',
      measurementId: 'G-VFDB1QL89P'
    },
    services: {
      firestore: true
      // firestore: {
      //   memoryOnly: false,
      //   static: false,
      // }
    },
  },
  axios: {
    // proxyHeaders: false
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}

