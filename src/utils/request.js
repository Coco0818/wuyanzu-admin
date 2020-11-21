import axios from 'axios'

const request = axios.create({
  baseURL: '',
  timeout: 10000,
  headers: {},
})

// 请求拦截器
request.interceptors.request.use((config) => {
  return config
})

// 响应拦截
request.interceptors.response.use(
  (res) => {
    const result = res.data
    if (result.code === 20000) {
      return result.data
    } else {
      return Promise.reject(result.message)
    }
  },
  (err) => {
    // 响应失败
    return Promise.reject(err.message)
  }
)

export default request
