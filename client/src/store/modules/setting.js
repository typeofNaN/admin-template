import config from '@/config/appConfig'

const state = {
  device: 'desktop',
  openSlideBar: true,
  fixedHeader: true,
  theme: {...config.defaultTheme}
}

const getters = {
  getDevice: state => state.device,
  getIsMobile: state => state.device === 'mobile',
  getSlideBar: state => state.openSlideBar,
  getFixedHeader: state => state.fixedHeader,
  getIsThemeDark: state => state.theme.themeType === 'dark',
  getIsThemeLight: state => state.theme.themeType === 'light',
  getThemeLogoBGColor: state => state.theme.logoBGColor,
  getThemeHeaderBGColor: state => state.theme.headerBGColor,
  getThemeSlideBGColor: state => state.theme.slideBGColor,
  getThemeTextColor: state => state.theme.textColor
}

const mutations = {
  setDevice (state, device) {
    state.device = device
  },
  changeSliderBar (state) {
    state.openSlideBar = !state.openSlideBar
  },
  openSlideBar (state) {
    state.openSlideBar = true
  },
  closeSlideBar (state) {
    state.openSlideBar = false
  },
  changeFixedHeader (state, fixed) {
    state.fixedHeader = fixed
  },
  changeThemeColor (state, theme) {
    state.theme.themeType = theme.slideBGColor === '#f9fafc' ? 'light' : 'dark'
    state.theme.logoBGColor = theme.logoBGColor
    state.theme.headerBGColor = theme.headerBGColor
    state.theme.slideBGColor = theme.slideBGColor
    state.theme.textColor = theme.textColor
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
