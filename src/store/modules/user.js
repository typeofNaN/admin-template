import localUser from '@/utils/localUser'

const state = {
  user: null
}

const getters = {
  getCurrentUser: state => state.user
}

const mutations = {
  setUser (state, user) {
    state.user = user
    localUser.setCurrentUser(user)
  },

  removeUser (state) {
    state.user = null
  }
}

const actions = {
  signin ({ commit }, payload) {
    commit('setUser', payload.currentRole)

    payload.redirect()
  },

  signout ({ commit }) {
    commit('removeUser')

    localUser.removeCurrentUser()
  },

  checkUserState ({ commit }) {
    let currentUser = localUser.getCurrentUser()

    commit('setUser', currentUser)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
