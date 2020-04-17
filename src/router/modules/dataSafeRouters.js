const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/dataSafe',
  name: 'dataSafe',
  component: Home,
  meta: {
    icon_white: 'safe-white',
    icon_black: 'safe-black',
    title: 'dataSafe',
    group: 'dataSafe'
  }
}

const HomeRouters = {
  path: '/dataSafe',
  component: DefaultLayout,
  meta: {
    icon_white: 'safe-white',
    icon_black: 'safe-black',
    title: 'dataSafe',
    group: 'dataSafe',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
