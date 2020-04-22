import Axios from 'axios'
import { Message } from 'element-ui'

const request = Axios.create({
  baseURL: 'http://localhost:5003/api/'
})

request.interceptors.request.use(req => {
  return req
}, error => {
  return Promise.reject(error)
})

request.interceptors.response.use(res => {
  if (res.data.code === 0) {
    return res.data.data
  } else {
    Message.error('数据请求失败！')
    return false
  }
}, error => {
  return Promise.reject(error)
})

export default request
