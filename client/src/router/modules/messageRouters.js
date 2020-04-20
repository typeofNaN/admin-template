const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/message',
  name: 'message',
  component: Home,
  meta: {
    icon_white: 'message-white',
    icon_black: 'message-black',
    title: 'message',
    group: 'message'
  }
}

const HomeRouters = {
  path: '/message',
  component: DefaultLayout,
  meta: {
    icon_white: 'message-white',
    icon_black: 'message-black',
    title: 'message',
    group: 'message',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
