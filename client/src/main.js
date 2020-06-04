// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import SlideVerify from 'vue-monoplasty-slide-verify'

import App from './App'
import router from './router'
import store from './store'
import Api from './service'
import i18n from './language'
import './icons'
import './mock'
// import './utils/dialogDrag'

import H5Components from './components/h5Setting'

// import Print from './utils/print'
import Print from 'vue-print-nb'

// import './themes/blue/index.css'
// import './themes/green/index.css'
// import './themes/pink/index.css'
// import './themes/purple/index.css'
// import './themes/red/index.css'
// import './themes/yellow/index.css'

import '@/assets/style/style.scss'
import '@/assets/style/ele.scss'

Vue.config.productionTip = false

Vue.prototype.api = Api

Vue.use(ElementUI, {
  size: 'mini'
})
Vue.use(SlideVerify)
Vue.use(Print)

const evt = {
  install (Vue) {
    Vue.prototype.$evt = new Vue()
  }
}
Vue.use(evt)
Vue.use(H5Components)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})
