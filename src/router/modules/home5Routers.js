const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/home5',
  name: 'home5',
  component: Home,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home5',
    group: 'home5'
  }
}

const HomeRouters = {
  path: '/home5',
  component: DefaultLayout,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home5',
    group: 'home5',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
