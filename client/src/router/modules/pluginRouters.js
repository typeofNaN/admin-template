const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/plugin',
  name: 'plugin',
  component: Home,
  meta: {
    icon: 'plugin',
    title: 'plugin',
    group: 'plugin'
  }
}

const HomeRouters = {
  path: '/plugin',
  component: DefaultLayout,
  meta: {
    icon: 'plugin',
    title: 'plugin',
    group: 'plugin',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
