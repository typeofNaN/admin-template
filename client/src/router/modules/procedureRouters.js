const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/procedure',
  name: 'procedure',
  component: Home,
  meta: {
    icon_white: 'classification-white',
    icon_black: 'classification-black',
    title: 'procedure',
    group: 'procedure'
  }
}

const HomeRouters = {
  path: '/procedure',
  component: DefaultLayout,
  meta: {
    icon_white: 'classification-white',
    icon_black: 'classification-black',
    title: 'procedure',
    group: 'procedure',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
