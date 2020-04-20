const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')
const HomeForm = () => import('@/views/home/homeForm')
const Message = () => import('@/views/home/message')

const HomeRoute = {
  path: '/',
  name: 'control',
  component: Home,
  meta: {
    icon_white: 'control-white',
    icon_black: 'control-black',
    title: 'control',
    group: 'home',
    affix: true
  }
}

const HomeFormRoute = {
  path: '/homeForm',
  name: 'homeform',
  component: HomeForm,
  meta: {
    icon_white: 'control-white',
    icon_black: 'control-black',
    title: 'homeform',
    group: 'home'
  }
}

const messageRoute = {
  path: '/messagelayer',
  name: 'messagelayer',
  component: Message,
  meta: {
    icon_white: 'control-white',
    icon_black: 'control-black',
    title: 'message_layer',
    group: 'home'
  }
}

const HomeRouters = {
  path: '/',
  component: DefaultLayout,
  meta: {
    icon_white: 'control-white',
    icon_black: 'control-black',
    title: 'control',
    group: 'home',
    showInHome: true
  },
  children: [
    HomeRoute,
    HomeFormRoute,
    messageRoute
  ]
}

export default HomeRouters
