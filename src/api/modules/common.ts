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
 * @LastEditTime: 2020-11-17 08:01:00
 */

import request from '/@/utils/request'
// import Qs from 'qs'

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
      url: '/refreshToken',
      method: "GET"
    })
  }
}