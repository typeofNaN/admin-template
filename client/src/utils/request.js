import Axios from 'axios'
import { Message } from 'element-ui'

const request = Axios.create({
  baseURL: process.env.API_URL
})

request.interceptors.request.use(req => req, err => Promise.reject(err))

request.interceptors.response.use(res => {
  if (res.data.code === 0) {
    return res.data.data
  } else {
    Message.error('接口数据请求失败！')
    return false
  }
}, err => Promise.reject(err))

export default request
