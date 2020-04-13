const DefaultLayout = () => import('@/layouts/default')

const Customer1 = () => import('@/views/customer/customer1')
const Customer2 = () => import('@/views/customer/customer2')
const Customer3 = () => import('@/views/customer/customer3')
const Customer11 = () => import('@/views/customer/customer1-1')
const Customer12 = () => import('@/views/customer/customer1-2')
const Customer13 = () => import('@/views/customer/customer1-3')

const Customer11Route = {
  path: '/customer/customer11',
  name: 'customer11',
  icon: 'el-icon-user-solid',
  component: Customer11,
  meta: {
    group: 'customer'
  }
}

const Customer12Route = {
  path: '/customer/customer12',
  name: 'customer12',
  icon: 'el-icon-user-solid',
  component: Customer12,
  meta: {
    group: 'customer'
  }
}

const Customer13Route = {
  path: '/customer/customer13',
  name: 'customer13',
  icon: 'el-icon-user-solid',
  component: Customer13,
  meta: {
    group: 'customer'
  }
}

const Customer1Route = {
  path: '/customer/customer1',
  name: 'customer1',
  icon: 'el-icon-user-solid',
  component: Customer1,
  redirect: '/customer/customer11',
  meta: {
    group: 'customer'
  },
  children: [
    Customer11Route,
    Customer12Route,
    Customer13Route
  ]
}

const Customer2Route = {
  path: '/customer/customer2',
  name: 'customer2',
  icon: 'el-icon-user-solid',
  component: Customer2,
  meta: {
    group: 'customer'
  }
}

const Customer3Route = {
  path: '/customer/customer3',
  name: 'customer3',
  icon: 'el-icon-user-solid',
  component: Customer3,
  meta: {
    group: 'customer'
  }
}

const CustomerRoute = {
  path: '/customer/customer1',
  name: '客户',
  icon: 'el-icon-user-solid',
  component: DefaultLayout,
  redirect: '/customer/customer1',
  meta: {
    group: 'customer',
    showInHome: true
  },
  children: [
    Customer1Route,
    Customer2Route,
    Customer3Route
  ]
}

export default CustomerRoute
