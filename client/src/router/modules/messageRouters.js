const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/message',
  name: 'message',
  component: Home,
  meta: {
    icon: 'message',
    title: 'message',
    group: 'message'
  }
}

const HomeRouters = {
  path: '/message',
  component: DefaultLayout,
  meta: {
    icon: 'message',
    title: 'message',
    group: 'message',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
