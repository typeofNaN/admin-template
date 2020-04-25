const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/vip',
  name: 'vip',
  component: Home,
  meta: {
    icon: 'classification',
    title: 'vip',
    group: 'vip'
  }
}

const HomeRouters = {
  path: '/vip',
  component: DefaultLayout,
  meta: {
    icon: 'classification',
    title: 'vip',
    group: 'vip',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
