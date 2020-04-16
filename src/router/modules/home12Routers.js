const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/home12',
  name: 'home12',
  component: Home,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home12',
    group: 'home12'
  }
}

const HomeRouters = {
  path: '/home12',
  component: DefaultLayout,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home12',
    group: 'home12',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
