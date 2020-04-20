const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/jurisdiction',
  name: 'jurisdiction',
  component: Home,
  meta: {
    icon_white: 'jurisdiction-white',
    icon_black: 'jurisdiction-black',
    title: 'jurisdiction',
    group: 'jurisdiction'
  }
}

const HomeRouters = {
  path: '/jurisdiction',
  component: DefaultLayout,
  meta: {
    icon_white: 'jurisdiction-white',
    icon_black: 'jurisdiction-black',
    title: 'jurisdiction',
    group: 'jurisdiction',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
