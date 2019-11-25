module.exports = {
  mode: 'universal',
  srcDir: 'src/',
  dir: {
    static: '../static'
  },
  /*
   ** Headers of the page
   */
  // generate: {
  //   devtools: true,
  //   subFolders: false,
  //   routes: ['/', '/event/index', '/event/1', '/event/2', '/event/3', '/event/4', '/event/5', '/event/6']
  // },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css', '@/assets/css/main.less'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/element-ui.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/router'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    less: './assets/**/*.less'
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {
      // if (!isDev) {
      //   config.output.publicPath = './../_nuxt/'
      // }
    }
  }
}