/*
 * _______________#########_______________________ 
 * ______________############_____________________ 
 * ______________#############____________________ 
 * _____________##__###########___________________ 
 * ____________###__######_#####__________________ 
 * ____________###_#######___####_________________ 
 * ___________###__##########_####________________ 
 * __________####__###########_####_______________ 
 * ________#####___###########__#####_____________ 
 * _______######___###_########___#####___________ 
 * _______#####___###___########___######_________ 
 * ______######___###__###########___######_______ 
 * _____######___####_##############__######______ 
 * ____#######__#####################_#######_____ 
 * ____#######__##############################____ 
 * ___#######__######_#################_#######___ 
 * ___#######__######_######_#########___######___ 
 * ___#######____##__######___######_____######___ 
 * ___#######________######____#####_____#####____ 
 * ____######________#####_____#####_____####_____ 
 * _____#####________####______#####_____###______ 
 * ______#####______;###________###______#________ 
 * ________##_______####________####______________ 
 * 
 * @Author: JackM
 * @Date: 2020-11-02 22:01:53
 * @LastEditors: JackM
 * @LastEditTime: 2020-11-18 21:30:11
 */


import axios from 'axios'
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
    config.headers['Content-Type'] = 'application/json'
    if (lockr.get('Token')) {
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
    if (!res.success && res.code === 200 && res.msg === "身份过期或未登陆") {
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