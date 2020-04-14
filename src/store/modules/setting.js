const state = {
  openSlideBar: true,
  themeColor: '#454545',
  fixedHeader: true
}

const getters = {
  slideBar: state => state.openSlideBar,
  getThemeColor: state => state.themeColor,
  getFixedHeader: state => state.fixedHeader
}

const mutations = {
  changeSliderBar (state) {
    state.openSlideBar = !state.openSlideBar
  },
  changeThemeColor (state, color) {
    state.themeColor = color
  },
  changeFixedHeader (state, fixed) {
    state.fixedHeader = fixed
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
