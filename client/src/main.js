// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import router from './router'
import store from './store'
import Api from './service'
import i18n from './language'
import './icons'
import './mock'

import '@/assets/style/style.scss'
import '@/assets/style/ele.scss'

Vue.config.productionTip = false

Vue.prototype.api = Api

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})
