const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/home9',
  name: 'home9',
  component: Home,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home9',
    group: 'home9'
  }
}

const HomeRouters = {
  path: '/home9',
  component: DefaultLayout,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home9',
    group: 'home9',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
