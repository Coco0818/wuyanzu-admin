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
export const reqCompany = () => {
  return request({
    method: 'GET',
    url: '/api/companys',
  })
}

export const removeCompany = (id) => {
  return request({
    method: 'POST',
    url: API + '/removeCompany',
    data: {
      id,
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
export const addCompany = (data) => {
  return request({
    method: 'POST',
    url: API + '/addCompany',
    data,
  })
}
export const updateCompany = (data) => {
  return request({
    method: 'POST',
    url: API + '/updateCompany',
    data,
  })
}
