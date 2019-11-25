import axios from 'axios'
import { Message } from 'element-ui'
import host from '@/config/env'
const service = axios.create({
  baseURL: host[process.env.NODE_ENV],
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    console.log(res)
    if (res.code === 0) {
      return res
    } else {
      Message({
        message: res.msg,
        type: 'warning',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.msg || 'Error'))
    }
  },
  error => {
    Message({
      message: error.msg,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
