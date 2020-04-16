const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/home7',
  name: 'home7',
  component: Home,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home7',
    group: 'home7'
  }
}

const HomeRouters = {
  path: '/home7',
  component: DefaultLayout,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home7',
    group: 'home7',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
