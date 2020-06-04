const DefaultLayout = () => import('@/layouts/default')

const Page401 = () => import('@/views/errorPage/401')
const Page404 = () => import('@/views/errorPage/404')

const Page401Route = {
  path: '/error/401',
  name: '401',
  component: Page401,
  meta: {
    icon: '404',
    title: '401',
    group: 'error'
  }
}

const Page404Route = {
  path: '/error/404',
  name: '404',
  component: Page404,
  meta: {
    icon: '404',
    title: '404',
    group: 'error'
  }
}

const ErrorPageRouters = {
  path: '/error',
  component: DefaultLayout,
  redirect: '/error/401',
  meta: {
    icon: '404',
    title: 'error',
    group: 'error',
    showInHome: true
  },
  children: [
    Page401Route,
    Page404Route
  ]
}

export default ErrorPageRouters
