// 封装API模板, 格式
import request from '@utils/request'

const API = '/bs'

export const reqCompany = () => {
  return request({
    method: 'GET',
    url: "/api" + '/companys'
  })
}

export const removeCompany = (id) => {
  return request({
    method: 'POST',
    url: API + '/removeCompany',
    data: {
      id
    }
  })
}
export const addCompany = (data) => {
  return request({
    method: 'POST',
    url: API + '/addCompany',
    data
  })
}
export const updateCompany = (data) => {
  return request({
    method: "POST",
    url: API + "/updateCompany",
    data
  })
}