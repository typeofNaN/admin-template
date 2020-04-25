const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')

const HomeRoute = {
  path: '/routineManage',
  name: 'routineManage',
  component: Home,
  meta: {
    icon: 'setting',
    title: 'routineManage',
    group: 'routineManage'
  }
}

const HomeRouters = {
  path: '/routineManage',
  component: DefaultLayout,
  meta: {
    icon: 'setting',
    title: 'routineManage',
    group: 'routineManage',
    showInHome: true
  },
  children: [
    HomeRoute
  ]
}

export default HomeRouters
