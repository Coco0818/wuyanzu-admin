// 封装API模板, 格式
import request from '@utils/request'

const API = '/bs'

// 登录
export const reqLogin = (name, password) => {
  return request({
    method: 'POST',
    url: API + '/login',
    data: {
      name,
      password,
    },
  })
}

// 注册

export const reqRegister = (name, password) => {
  return request({
    method: 'POST',
    url: API + '/register',
    data: {
      name,
      password,
    },
  })
}
