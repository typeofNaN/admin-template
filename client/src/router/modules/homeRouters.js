const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')
const HomeForm = () => import('@/views/home/homeForm')
const Message = () => import('@/views/home/messages')
const Calendar = () => import('@/views/home/calendar')
const Tags = () => import('@/views/home/tags')
const Editor = () => import('@/views/home/richEditor')
const Tabs = () => import('@/views/home/tabs')
const Icons = () => import('@/views/home/icons')

const HomeRoute = {
  path: '/',
  name: 'control',
  component: Home,
  meta: {
    icon: 'dashboard',
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
    icon: 'dashboard',
    title: 'homeform',
    group: 'home'
  }
}

const MessageRoute = {
  path: '/messagelayer',
  name: 'message_layer',
  component: Message,
  meta: {
    icon: 'dashboard',
    title: 'message_layer',
    group: 'home',
    isNew: true
  }
}

const CalendarRoute = {
  path: '/calendar',
  name: 'calendar',
  component: Calendar,
  meta: {
    icon: 'dashboard',
    title: 'calendar',
    group: 'home'
  }
}

const TagsRoute = {
  path: '/tags',
  name: 'tags',
  component: Tags,
  meta: {
    icon: 'dashboard',
    title: 'tags',
    group: 'home',
    isNew: true
  }
}

const EditorRoute = {
  path: '/editor',
  name: 'editor',
  component: Editor,
  meta: {
    icon: 'dashboard',
    title: 'editor',
    group: 'home',
    isNew: true
  }
}

const TabsRoute = {
  path: '/tabs',
  name: 'tabs',
  component: Tabs,
  meta: {
    icon: 'dashboard',
    title: 'tabs',
    group: 'home',
    isNew: true
  }
}

const IconsRoute = {
  path: '/icons',
  name: 'icons',
  component: Icons,
  meta: {
    icon: 'dashboard',
    title: 'icons',
    group: 'home',
    isNew: true
  }
}

const HomeRouters = {
  path: '/',
  component: DefaultLayout,
  meta: {
    icon: 'dashboard',
    title: 'control',
    group: 'home',
    showInHome: true
  },
  children: [
    HomeRoute,
    HomeFormRoute,
    MessageRoute,
    CalendarRoute,
    TagsRoute,
    EditorRoute,
    TabsRoute,
    IconsRoute
  ]
}

export default HomeRouters
