const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/classification',
  name: 'classification',
  component: Home,
  meta: {
    icon_white: 'classification-white',
    icon_black: 'classification-black',
    title: 'classification',
    group: 'classification'
  }
}

const HomeRouters = {
  path: '/classification',
  component: DefaultLayout,
  meta: {
    icon_white: 'classification-white',
    icon_black: 'classification-black',
    title: 'classification',
    group: 'classification',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
