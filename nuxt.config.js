module.exports = {
  mode: 'universal',
  srcDir: 'src/',
  dir: {
    static: '../static'
  },
  router: {
    middleware: 'guard'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: '全民泡泡超人-官方网站',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          '泡泡超人,泡泡堂,BNB,Q萌,休闲,竞技,对战,3D,炸弹,水泡,泡泡,吃鸡模式,休闲游戏,手机游戏,休闲对战,手游,虚拟对战,经典玩法,复活对战,超能力,水柱,网络游戏'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '泡泡超人,泡泡堂,BNB,Q萌,休闲,竞技,对战,3D,炸弹,水泡,泡泡,吃鸡模式,休闲游戏,手机游戏,休闲对战,手游,虚拟对战,经典玩法,复活对战,超能力,水柱,网络游戏'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon_new.ico' }]
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
    { src: '~/plugins/i18n.js' },
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/intersection.js', ssr: false },
    { src: '~/plugins/element-ui.js', ssr: false },
    { src: '~/plugins/baidu.js', ssr: false }
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
  // 当您需要在页面中注入一些变量和mixin而不必每次都导入它们时（全局样式）
  // styleResources: {
  //   less: './assets/**/*.less'
  // },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    // extractCSS: { allChunks: true },
    transpile: [/^element-ui/],
    vendor: ['vue-i18n'],
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
