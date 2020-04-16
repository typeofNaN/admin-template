const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/home15',
  name: 'home15',
  component: Home,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home15',
    group: 'home15'
  }
}

const HomeRouters = {
  path: '/home15',
  component: DefaultLayout,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home15',
    group: 'home15',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
