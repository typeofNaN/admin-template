const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/demo',
  name: 'demo',
  component: Home,
  meta: {
    icon_white: 'classification-white',
    icon_black: 'classification-black',
    title: 'demo',
    group: 'demo'
  }
}

const HomeRouters = {
  path: '/demo',
  component: DefaultLayout,
  meta: {
    icon_white: 'classification-white',
    icon_black: 'classification-black',
    title: 'demo',
    group: 'demo',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
