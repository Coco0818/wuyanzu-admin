// 封装API模板, 格式
import request from '@utils/request'

const API = '/api'

export const reqLogin = (phone, password) => {
  return request({
    method: 'POST',
    url: API + '/login',
    data: {
      phone,
      password,
    },
  })
}
