const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/',
  name: '首页',
  component: Home,
  icon: 'el-icon-s-home',
  meta: {
    group: 'home',
    affix: true
  }
}

const HomeRouters = {
  path: '/',
  name: '首页',
  component: DefaultLayout,
  icon: 'el-icon-s-home',
  meta: {
    group: 'home',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
