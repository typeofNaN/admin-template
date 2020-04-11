import accountRouters from './modules/accountRouters'
import errorRouters from './modules/errorRouters'

const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/',
  name: 'Home',
  component: Home
}

const DefaultRouters = {
  path: '/',
  component: DefaultLayout,
  redirect: '/home',
  children: [
    HomeRoute
  ]
}

export default [
  DefaultRouters,
  accountRouters,
  errorRouters
]
