const DefaultLayout = () => import('@/layouts/default')

const Home = () => import('@/views/home')
const HomeForm = () => import('@/views/home/homeForm')
const Message = () => import('@/views/home/message')
const MessageBox = () => import('@/views/home/messageBox')
const Notification = () => import('@/views/home/notification')
const Tooltip = () => import('@/views/home/tooltip')
const Popover = () => import('@/views/home/popover')
const Popconfirm = () => import('@/views/home/popconfirm')
const Calendar = () => import('@/views/home/calendar')

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

const MessageRoute = {
  path: '/messagelayer',
  name: 'message_layer',
  component: Message,
  meta: {
    icon_white: 'control-white',
    icon_black: 'control-black',
    title: 'message_layer',
    group: 'home'
  }
}

const MessageBoxRoute = {
  path: '/messagebox',
  name: 'message_box',
  component: MessageBox,
  meta: {
    icon_white: 'control-white',
    icon_black: 'control-black',
    title: 'message_box',
    group: 'home'
  }
}

const NotificationRoute = {
  path: '/notification',
  name: 'notification',
  component: Notification,
  meta: {
    icon_white: 'control-white',
    icon_black: 'control-black',
    title: 'notification',
    group: 'home'
  }
}

const TooltipRoute = {
  path: '/tooltip',
  name: 'tooltip',
  component: Tooltip,
  meta: {
    icon_white: 'control-white',
    icon_black: 'control-black',
    title: 'tooltip',
    group: 'home'
  }
}

const PopoverRoute = {
  path: '/popover',
  name: 'popover',
  component: Popover,
  meta: {
    icon_white: 'control-white',
    icon_black: 'control-black',
    title: 'popover',
    group: 'home'
  }
}

const PopconfirmRoute = {
  path: '/popconfirm',
  name: 'popconfirm',
  component: Popconfirm,
  meta: {
    icon_white: 'control-white',
    icon_black: 'control-black',
    title: 'popconfirm',
    group: 'home'
  }
}

const CalendarRoute = {
  path: '/calendar',
  name: 'calendar',
  component: Calendar,
  meta: {
    icon_white: 'control-white',
    icon_black: 'control-black',
    title: 'calendar',
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
    MessageRoute,
    MessageBoxRoute,
    NotificationRoute,
    TooltipRoute,
    PopoverRoute,
    PopconfirmRoute,
    CalendarRoute
  ]
}

export default HomeRouters
