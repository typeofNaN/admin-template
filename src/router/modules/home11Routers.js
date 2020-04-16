const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/home11',
  name: 'home11',
  component: Home,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home11',
    group: 'home11'
  }
}

const HomeRouters = {
  path: '/home11',
  component: DefaultLayout,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home11',
    group: 'home11',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
