import Vue from 'vue'
import Router from 'vue-router'

const _import = (file) => () =>
  import(
    /* webpackChunkName: "[request]" */
    `@/pages/${file}.vue`
  ).then((m) => m.default || m)

function scrollWait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 50)
  })
}

Vue.use(Router)

export function createRouter() {
  const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: _import('index')
      },
      {
        path: '/activity/:page?',
        name: 'activity',
        component: _import('activity')
      },
      {
        path: '/service',
        name: 'service',
        component: _import('service'),
        meta: {
          headTheme: 'absolute service'
        }
      },
      {
        path: '/service-search-result',
        name: 'service-search-result',
        component: _import('service-search-result'),
        meta: {
          headTheme: 'absolute'
        }
      },
      {
        path: '/about-us',
        name: 'about-us',
        component: _import('about/us'),
        meta: {
          nav: 'about'
        }
      },
      {
        path: '/about-game',
        name: 'about-game',
        component: _import('about/game'),
        meta: {
          nav: 'about',
          headTheme: 'absolute'
        }
      },
      {
        path: '/article/:id',
        name: 'article-detail',
        component: _import('article-detail')
      }
    ],
    async scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        await scrollWait()
        return {
          selector: to.hash
        }
      }
      return { x: 0, y: 0 }
    }
  })
  router.beforeEach((to, from, next) => {
    console.log('you are in before each')
    next()
  })
  return router
}
