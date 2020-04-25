const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/wechat',
  name: 'wechat',
  component: Home,
  meta: {
    icon: 'wechat',
    title: 'wechat',
    group: 'wechat'
  }
}

const HomeRouters = {
  path: '/wechat',
  component: DefaultLayout,
  meta: {
    icon: 'wechat',
    title: 'wechat',
    group: 'wechat',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
