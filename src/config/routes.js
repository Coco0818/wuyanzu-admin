/**
 * 路由配置
 *
 */
import { lazy } from 'react'

const Login = lazy(() => import('@pages/Login'))
const Admin = lazy(() => import('@pages/Admin'))
const Home = lazy(() => import('@pages/Home'))

const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/admin',
    component: Admin,
  },
]

export default routes
