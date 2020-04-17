const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/plugin',
  name: 'plugin',
  component: Home,
  meta: {
    icon_white: 'plugin-white',
    icon_black: 'plugin-black',
    title: 'plugin',
    group: 'plugin'
  }
}

const HomeRouters = {
  path: '/plugin',
  component: DefaultLayout,
  meta: {
    icon_white: 'plugin-white',
    icon_black: 'plugin-black',
    title: 'plugin',
    group: 'plugin',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
