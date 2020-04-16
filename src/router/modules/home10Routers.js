const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/home10',
  name: 'home10',
  component: Home,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home10',
    group: 'home10'
  }
}

const HomeRouters = {
  path: '/home10',
  component: DefaultLayout,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home10',
    group: 'home10',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
