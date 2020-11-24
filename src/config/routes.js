/**
  路由配置
 */
import { lazy } from 'react'

const Login = lazy(() => import('@pages/Login'))
const Admin = lazy(() => import('@pages/Admin'))
const Home = lazy(() => import('@pages/Home'))

// const CenterPerson = lazy(() => import('@pages/CenterPerson'))

// const Positions = lazy(() => import('@pages/Positions'))

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/admin',
    component: Admin,
  },
]

export default routes
