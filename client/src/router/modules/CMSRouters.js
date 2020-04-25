const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/CMS',
  name: 'CMS',
  component: Home,
  meta: {
    icon: 'classification',
    title: 'CMS',
    group: 'CMS'
  }
}

const HomeRouters = {
  path: '/CMS',
  component: DefaultLayout,
  meta: {
    icon: 'classification',
    title: 'CMS',
    group: 'CMS',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
