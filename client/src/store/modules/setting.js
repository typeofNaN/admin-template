import config from '@/config/appConfig'

const state = {
  openSlideBar: true,
  fixedHeader: true,
  theme: {...config.defaultTheme}
}

const getters = {
  getSlideBar: state => state.openSlideBar,
  getFixedHeader: state => state.fixedHeader,
  getThemeLogoBGColor: state => state.theme.logoBGColor,
  getThemeHeaderBGColor: state => state.theme.headerBGColor,
  getThemeSlideBGColor: state => state.theme.slideBGColor,
  getThemeTextColor: state => state.theme.textColor
}

const mutations = {
  changeSliderBar (state) {
    state.openSlideBar = !state.openSlideBar
  },
  changeFixedHeader (state, fixed) {
    state.fixedHeader = fixed
  },
  changeThemeColor (state, theme) {
    state.theme = { ...theme }
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
