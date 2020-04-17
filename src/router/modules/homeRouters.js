const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/',
  name: 'control',
  component: Home,
  meta: {
    icon_white: 'control-white',
    icon_black: 'control-black',
    title: 'control',
    group: 'control',
    affix: true
  }
}

const HomeRouters = {
  path: '/',
  component: DefaultLayout,
  meta: {
    icon_white: 'control-white',
    icon_black: 'control-black',
    title: 'control',
    group: 'control',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
