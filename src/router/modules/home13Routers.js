const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/home13',
  name: 'home13',
  component: Home,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home13',
    group: 'home13'
  }
}

const HomeRouters = {
  path: '/home13',
  component: DefaultLayout,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home13',
    group: 'home13',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
