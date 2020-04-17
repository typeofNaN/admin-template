const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/document',
  name: 'document',
  component: Home,
  meta: {
    icon_white: 'document-white',
    icon_black: 'document-black',
    title: 'document',
    group: 'document'
  }
}

const HomeRouters = {
  path: '/document',
  component: DefaultLayout,
  meta: {
    icon_white: 'document-white',
    icon_black: 'document-black',
    title: 'document',
    group: 'document',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
