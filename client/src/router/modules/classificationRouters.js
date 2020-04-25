const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/classification',
  name: 'classification',
  component: Home,
  meta: {
    icon: 'classification',
    title: 'classification',
    group: 'classification'
  }
}

const HomeRouters = {
  path: '/classification',
  component: DefaultLayout,
  meta: {
    icon: 'classification',
    title: 'classification',
    group: 'classification',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
