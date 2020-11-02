import axios from 'axios'
import baseConfig from './../static/config'
import lockr from './lockr'

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
    console.log('lockr',lockr.get('Token'));
    if(lockr.get('Token')){
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
    if(!res.success && res.code === 200 && res.msg === "身份过期或未登陆") {
      lockr.clear()
      console.log("请重新登陆");
    }
    return res
  },
  error => {
    return Promise.reject(error)
  }
)

export default service