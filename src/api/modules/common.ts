/*
 *                   ___====-_  _-====___
 *             _--^^^#####//      \\#####^^^--_
 *          _-^##########// (    ) \\##########^-_
 *         -############//  |\^^/|  \\############-
 *       _/############//   (@::@)   \############\_
 *      /#############((     \\//     ))#############\
 *     -###############\\    (oo)    //###############-
 *    -#################\\  / VV \  //#################-
 *   -###################\\/      \//###################-
 *  _#/|##########/\######(   /\   )######/\##########|\#_
 *  |/ |#/\#/\#/\/  \#/\##\  |  |  /##/\#/  \/\#/\#/\#| \|
 *  `  |/  V  V  `   V  \#\| |  | |/#/  V   '  V  V  \|  '
 *     `   `  `      `   / | |  | | \   '      '  '   '
 *                      (  | |  | |  )
 *                     __\ | |  | | /__
 *                    (vvv(VVV)(VVV)vvv)
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *                神兽保佑            永无BUG
 * 
 * @Author: JackM
 * @Date: 2020-11-02 22:01:53
 * @LastEditors: JackM
 * @LastEditTime: 2020-11-23 19:37:14
 */

import request from '/@/utils/request'

export default {
  /**
   * form表单传参S
   * @param data 
   */
  system_login(data: any) {
    console.log('system_login', data);
    return request({
      url: '/login',
      method: "POST",
      data: data
    })
  },
  system_refreshToken() {
    return request({
      url: '/api/token/refreshToken',
      method: "GET"
    })
  },
  system_getGraphCaptcha(key: string) {
    return request({
      url: '/api/catpcha/getGraphCaptcha',
      method: "GET",
      data: { key: key, _method: "GET" }
    })
  }
}