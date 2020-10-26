import axios from 'axios'
import baseConfig from '@/static/config'
import lockr from 'lockr'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;'
axios.defaults.headers.post['charset'] = 'UTF-8;'
axios.defaults.withCredentials = true
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
const service = axios.create({
    // baseURL: baseConfig.serverUrl+'api',
    baseURL: '/api',
    timeout: 15000,
})

service.interceptors.request.use(
  config => {
    let flag = config.headers['Content-Type'] && config.headers['Content-Type'].indexof('application/json')
    if(lockr.get('token')){
      config.headers['Token'] = lockr.get('Token')
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    return Promise.reject(error)
  }
)

export default service