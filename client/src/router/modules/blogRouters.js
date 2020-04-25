const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/blog',
  name: 'blog',
  component: Home,
  meta: {
    icon: 'classification',
    title: 'blog',
    group: 'blog'
  }
}

const HomeRouters = {
  path: '/blog',
  component: DefaultLayout,
  meta: {
    icon: 'classification',
    title: 'blog',
    group: 'blog',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
