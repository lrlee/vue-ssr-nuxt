import Vue from 'vue'
import Router from 'vue-router'

const _import = (file, path) => () =>
  import(
    /* webpackChunkName: "[request]" */
    `@/pages${path}/${file}.vue`
  ).then(m => m.default || m)

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
        name: 'guide',
        component: _import('index', '/pc/guide')
      },
      {
        path: '/home',
        name: 'home',
        component: _import('index', '/pc/home')
      },
      {
        path: '/m',
        name: 'guide_m',
        component: _import('index', '/m/guide')
      },
      {
        path: '/event',
        name: 'eventHome',
        component: _import('index', '/pc/event')
      },
      {
        path: '/event/:type',
        name: 'eventContent',
        component: _import('event', '/pc/event')
      },
      {
        path: '/m/event',
        name: 'eventHome_m',
        component: _import('index', '/m/event')
      },
      {
        path: '/m/event/:type',
        name: 'eventContent_m',
        component: _import('event', '/m/event')
      },
      {
        path: '/m/service',
        name: 'service_m',
        component: _import('index', '/m/service')
      },
      {
        path: '/m/service/QA/:id',
        name: 'serviceQA_m',
        component: _import('detail', '/m/service')
      },
      {
        path: '/m/service/contact',
        name: 'serviceContact_m',
        component: _import('contact', '/m/service')
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
  return router
}
