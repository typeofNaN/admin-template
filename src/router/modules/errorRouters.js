const ErrorLayout = () => import('@/layouts/error')

const ErrorRoute = {
  // add 404 route
  path: '*',
  component: ErrorLayout
}

export default ErrorRoute
