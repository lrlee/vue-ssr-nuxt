import * as api from '@/api'

export const state = () => ({
  downloadLinks: null
})

export const mutations = {
  setDownloadLinks(state, links) {
    state.downloadLinks = links
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
