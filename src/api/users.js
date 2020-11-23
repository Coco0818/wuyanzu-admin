// 封装API模板, 格式
import request from '@utils/request'

const API = '/bs'

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
