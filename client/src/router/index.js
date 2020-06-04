import Vue from 'vue'
import Router from 'vue-router'

import routes from './routers'
import beforeRouterCheck from './beforeRouterCheck'

Vue.use(Router)

// function getAbsolutePath () {
//   let path = location.pathname
//   return path.substring(0, path.lastIndexOf('/') + 1)
// }

const router = new Router({
  routes
  // mode: 'history',
  // base: getAbsolutePath()
})

router.beforeEach(beforeRouterCheck)

export default router
