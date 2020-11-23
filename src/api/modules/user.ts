/*
 *                        .::::.
 *                      .::::::::.
 *                     :::::::::::
 *                  ..:::::::::::'
 *               '::::::::::::'
 *                 .::::::::::
 *            '::::::::::::::..
 *                 ..::::::::::::.
 *               ``::::::::::::::::
 *                ::::``:::::::::'        .:::.
 *               ::::'   ':::::'       .::::::::.
 *             .::::'      ::::     .:::::::'::::.
 *            .:::'       :::::  .:::::::::' ':::::.
 *           .::'        :::::.:::::::::'      ':::::.
 *          .::'         ::::::::::::::'         ``::::.
 *      ...:::           ::::::::::::'              ``::.
 *     ````':.          ':::::::::'                  ::::..
 *                        '.:::::'                    ':'````..
 * 
 * @Author: JackM
 * @Date: 2020-11-02 22:01:53
 * @LastEditors: JackM
 * @LastEditTime: 2020-11-23 19:31:38
 */

import request from '/@/utils/request'

export default {
  systemUser_add(data: any) {
    return request<{ success: boolean }>({
      url: '/systemUser/add',
      method: "POST",
      data: data
    })
  },
  systemUser_deleteById(id: number) {
    return request({
      url: '/systemUser/deleteById',
      method: "POST",
      data: { id: id, _method: "DELETE" }
    })
  },
  systemUser_modifyById(data: any) {
    return request({
      url: '/systemUser/modifyById',
      method: "POST",
      data: { systemUser: data, _method: "PUT" }
    })
  },
  systemUser_query(data: any) {
    return request({
      url: '/systemUser/paging?page=' + data.page + '&size=' + data.size + '&keyWord=',
      method: "GET"
    })
  },
  systemUser_getById(id: any) {
    return request({
      url: '/systemUser/getById?id=' + id,
      method: "GET"
    })
  },
  systemUser_addWithRole(data: any) {
    return request({
      url: '/systemUser/addWithRole',
      method: "POST",
      data: data
    })
  },
  systemUser_getLoginInfo() {
    return request({
      url: '/systemUser/getLoginInfo',
      method: "GET"
    })
  },
  systemUser_getWithRoleById(id: Number) {
    return request({
      url: "/systemUser/getWithRoleById?id=" + id,
      method: "GET"
    })
  },
  systemUser_modifyWithRoleById(data: any) {
    return request({
      url: "/systemUser/modifyWithRoleById",
      method: "POST",
      data: { systemUserDTO: data, _method: "PUT" }
    })
  },
}