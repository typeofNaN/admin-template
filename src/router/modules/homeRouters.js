const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/',
  name: 'home',
  component: Home,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home',
    group: 'home',
    affix: true
  }
}

const HomeRouters = {
  path: '/',
  component: DefaultLayout,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home',
    group: 'home',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
