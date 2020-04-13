const state = {
  openSlideBar: true
}

const getters = {
  slideBar: state => state.openSlideBar
}

const mutations = {
  changeSliderBar (state) {
    state.openSlideBar = !state.openSlideBar
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
