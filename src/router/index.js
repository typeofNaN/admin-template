import Vue from 'vue'
import Router from 'vue-router'

import routes from './routers'
import beforeRouterCheck from './beforeRouterCheck'

Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach(beforeRouterCheck)

export default router
