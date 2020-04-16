const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/home14',
  name: 'home14',
  component: Home,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home14',
    group: 'home14'
  }
}

const HomeRouters = {
  path: '/home14',
  component: DefaultLayout,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home14',
    group: 'home14',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
