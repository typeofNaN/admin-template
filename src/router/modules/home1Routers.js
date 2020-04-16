const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/home1',
  name: 'home1',
  component: Home,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home1',
    group: 'home1'
  }
}

const HomeRouters = {
  path: '/home1',
  component: DefaultLayout,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home1',
    group: 'home1',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
