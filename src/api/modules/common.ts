import request from '../../utils/request'
import Qs from 'qs'

export default {
  /**
   * form表单传参S
   * @param data 
   */
  system_login(data: any) {
    return request({
      url: '/login',
      method: "POST",
      transformRequest: [function (data) {
        data = Qs.stringify(data)
        return data
      }],
      data: data
    })
  },
  system_refreshToken() {
    return request({
      url: '/refreshToken',
      method: "GET"
    })
  }
}