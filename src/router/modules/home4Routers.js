const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/home4',
  name: 'home4',
  component: Home,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home4',
    group: 'home4'
  }
}

const HomeRouters = {
  path: '/home4',
  component: DefaultLayout,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home4',
    group: 'home4',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
