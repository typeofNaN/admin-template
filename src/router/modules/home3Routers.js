const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/home3',
  name: 'home3',
  component: Home,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home3',
    group: 'home3'
  }
}

const HomeRouters = {
  path: '/home3',
  component: DefaultLayout,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home3',
    group: 'home3',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
