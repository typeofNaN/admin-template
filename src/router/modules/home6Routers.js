const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/home6',
  name: 'home6',
  component: Home,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home6',
    group: 'home6'
  }
}

const HomeRouters = {
  path: '/home6',
  component: DefaultLayout,
  icon: 'el-icon-s-home',
  meta: {
    title: 'home6',
    group: 'home6',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
