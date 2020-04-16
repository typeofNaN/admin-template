const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/home2',
  name: 'home2',
  component: Home,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home2',
    group: 'home2'
  }
}

const HomeRouters = {
  path: '/home2',
  component: DefaultLayout,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home2',
    group: 'home2',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
