import localUser from '@/utils/localUser'
import { i18nForPageTitle } from '@/utils/i18n'
import store from '@/store'

const beforeRouterCheck = (to, from, next) => {
  if (to.meta.title) {
    document.title = i18nForPageTitle(to.meta.title)
  } else {
    document.title = 'Sofia'
  }

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
