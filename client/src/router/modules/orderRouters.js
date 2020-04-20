const DefaultLayout = () => import('@/layouts/default')

const Order1 = () => import('@/views/order/order1')
const Order2 = () => import('@/views/order/order2')
const Order3 = () => import('@/views/order/order3')
const Order11 = () => import('@/views/order/order1-1')
const Order12 = () => import('@/views/order/order1-2')
const Order13 = () => import('@/views/order/order1-3')

const Order11Route = {
  path: '/order/order11',
  name: 'order11',
  component: Order11,
  meta: {
    icon_white: 'order-white',
    icon_black: 'order-black',
    title: 'order11',
    group: 'order'
  }
}

const Order12Route = {
  path: '/order/order12',
  name: 'order12',
  component: Order12,
  meta: {
    icon_white: 'order-white',
    icon_black: 'order-black',
    title: 'order12',
    group: 'order'
  }
}

const Order13Route = {
  path: '/order/order13',
  name: 'order13',
  component: Order13,
  meta: {
    icon_white: 'order-white',
    icon_black: 'order-black',
    title: 'order13',
    group: 'order'
  }
}

const Order1Route = {
  path: '/order/order1',
  name: 'order1',
  component: Order1,
  redirect: '/order/order11',
  meta: {
    icon_white: 'order-white',
    icon_black: 'order-black',
    title: 'order1',
    group: 'order'
  },
  children: [
    Order11Route,
    Order12Route,
    Order13Route
  ]
}

const Order2Route = {
  path: '/order/order2',
  name: 'order2',
  component: Order2,
  meta: {
    icon_white: 'order-white',
    icon_black: 'order-black',
    title: 'order2',
    group: 'order'
  }
}

const Order3Route = {
  path: '/order/order3',
  name: 'order3',
  component: Order3,
  meta: {
    icon_white: 'order-white',
    icon_black: 'order-black',
    title: 'order3',
    group: 'order'
  }
}

const OrderRoute = {
  path: '/order/order1',
  name: 'order',
  component: DefaultLayout,
  redirect: '/order/order1',
  meta: {
    icon_white: 'order-white',
    icon_black: 'order-black',
    title: 'order',
    group: 'order',
    showInHome: true
  },
  children: [
    Order1Route,
    Order2Route,
    Order3Route
  ]
}

export default OrderRoute
