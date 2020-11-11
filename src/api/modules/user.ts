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
 * @LastEditTime: 2020-11-11 23:09:39
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
  systemUser_delete(id: number) {
    return request({
      url: '/systemUser/deleteById',
      method: "POST",
      data: id
    })
  },
  systemUser_update(data: any) {
    return request({
      url: '/systemUser/updateById',
      method: "POST",
      data: data
    })
  },
  // systemUser_query(data: any) {
  //   return request({
  //     url: '/systemUser/list?page=' + data.page + '&size=' + data.size + '&keyWord=' + data.keyWord,
  //     method: "GET"
  //   })
  // },
  systemUser_query(data: any) {
    return request({
      url: '/systemUser/paging?page=' + data.page + '&size=' + data.size,
      method: "GET"
    })
  },
  systemUser_getById(id: any) {
    return request({
      url: '/systemUser/getById?id=' + id,
      method: "GET"
    })
  }
}