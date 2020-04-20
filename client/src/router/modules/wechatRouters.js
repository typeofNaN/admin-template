const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/wechat',
  name: 'wechat',
  component: Home,
  meta: {
    icon_white: 'wechat-white',
    icon_black: 'wechat-black',
    title: 'wechat',
    group: 'wechat'
  }
}

const HomeRouters = {
  path: '/wechat',
  component: DefaultLayout,
  meta: {
    icon_white: 'wechat-white',
    icon_black: 'wechat-black',
    title: 'wechat',
    group: 'wechat',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
