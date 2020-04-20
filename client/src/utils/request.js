import Axios from 'axios'

const request = Axios.create({
  baseURL: 'http://localhost:5003/api/'
})

request.interceptors.request.use(req => {
  return req
}, error => {
  return Promise.reject(error)
})

request.interceptors.response.use(res => {
  return res
}, error => {
  return Promise.reject(error)
})

export default request
