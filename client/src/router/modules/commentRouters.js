const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/comment',
  name: 'comment',
  component: Home,
  meta: {
    icon: 'comment',
    title: 'comment',
    group: 'comment'
  }
}

const HomeRouters = {
  path: '/comment',
  component: DefaultLayout,
  meta: {
    icon: 'comment',
    title: 'comment',
    group: 'comment',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
