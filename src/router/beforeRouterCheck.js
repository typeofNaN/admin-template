import localUser from '@/utils/localUser'
import store from '@/store'

const beforeRouterCheck = (to, from, next) => {
  let currentUser = localUser.getCurrentUser()

  store.dispatch('checkUserState')

  if (currentUser) {
    next()
  } else {
    if (to.path === '/account/signin') {
      next()
    } else {
      next({
        path: '/account/signin'
      })
    }
  }
}

export default beforeRouterCheck
