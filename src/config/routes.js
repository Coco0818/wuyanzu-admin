/**
  路由配置
 */
import Login from '@pages/Login'
import Companys from '@pages/Companys'

const routes = [
  {
    path: '/',
    component: Login,
    exact: true
  },
  {
    path: '/companys',
    component: Companys,
    exact: true
  }
]

export default routes
