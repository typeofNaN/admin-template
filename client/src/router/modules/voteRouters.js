const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/vote',
  name: 'vote',
  component: Home,
  meta: {
    icon_white: 'statistics-white',
    icon_black: 'statistics-black',
    title: 'vote',
    group: 'vote'
  }
}

const HomeRouters = {
  path: '/vote',
  component: DefaultLayout,
  meta: {
    icon_white: 'statistics-white',
    icon_black: 'statistics-black',
    title: 'vote',
    group: 'vote',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
