import * as api from '@/api'

export const state = () => ({
  downloadLinks: null,
  userAgent: '',
  locales: ['en', 'zh'],
  locale: 'zh'
})

export const mutations = {
  setDownloadLinks(state, links) {
    state.downloadLinks = links
  },
  setUserAgent(state, userAgent) {
    state.userAgent = userAgent
  },
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}

export const actions = {
  getDownloadLinks({ commit, state }) {
    if (state.downloadLinks) {
      return Promise.resolve(state.downloadLinks)
    }
    return api.getDownloadLink().then(res => {
      commit('setDownloadLinks', res.data)
    })
  }
}
