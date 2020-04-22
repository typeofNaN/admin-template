// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import router from './router'
import store from './store'
import Api from './service'
import './icons'
import './mock'

import '@/assets/style/style.css'

Vue.config.productionTip = false

Vue.prototype.api = Api

Vue.use(ElementUI)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: localStorage.getItem('LOCAL_LANG') || 'zh', // default zh
  messages: {
    zh: require('@/language/zh'),
    en: require('@/language/en')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})
