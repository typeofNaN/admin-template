const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/home8',
  name: 'home8',
  component: Home,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home8',
    group: 'home8'
  }
}

const HomeRouters = {
  path: '/home8',
  component: DefaultLayout,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home8',
    group: 'home8',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
