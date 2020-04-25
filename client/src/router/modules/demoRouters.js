const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/demo',
  name: 'demo',
  component: Home,
  meta: {
    icon: 'classification',
    title: 'demo',
    group: 'demo'
  }
}

const HomeRouters = {
  path: '/demo',
  component: DefaultLayout,
  meta: {
    icon: 'classification',
    title: 'demo',
    group: 'demo',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
