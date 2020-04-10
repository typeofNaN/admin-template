const AccountLayout = () => import('@/layouts/account')

const SignIn = () => import('@/views/user/signin')

const SigninRoute = {
  path: '/account/signin',
  name: 'SignIn',
  component: SignIn
}

const AccountRoute = {
  path: '/account',
  component: AccountLayout,
  redirect: '/account/signin',
  children: [
    SigninRoute
  ]
}

export default AccountRoute
