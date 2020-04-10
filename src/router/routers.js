import accountRouters from './modules/accountRouters'
import errorRouters from './modules/errorRouters'

// layouts
const DefaultLayout = () => import('@/layouts/default')

// view components
const Home = () => import('@/views/home')

// chrildren of RootRoute

const HomeRoute = {
  path: '/',
  name: 'Home',
  component: Home,
  meta: {
    requiresAuth: false
  }
}

const RootRoute = {
  path: '/',
  component: DefaultLayout,
  redirect: '/home',
  children: [
    HomeRoute
  ]
}

export default [
  RootRoute,
  accountRouters,
  errorRouters
]
