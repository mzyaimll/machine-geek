/*
 * @Author: GeekMzy
 * @LastEditors: GeekMzy
 * @Date: 2021-01-07 20:29:41
 * @LastEditTime: 2021-01-11 13:04:19
 * @Email: GeekMzy@out-look.com
 * @FilePath: /machine-geek/src/api/modules/user.ts
 * @Environment: big sur Js
 * @Description: 
 */

import request from '/@/utils/request'

export default {
  account_add(data: any) {
    return request<{ success: boolean }>({
      url: '/account/add',
      method: "POST",
      data: data
    })
  },
  account_deleteById(id: number) {
    return request({
      url: '/account/deleteById',
      method: "POST",
      data: { id: id, _method: "DELETE" }
    })
  },
  account_modifyById(data: any) {
    return request({
      url: '/account/modifyById',
      method: "POST",
      data: { account: data, _method: "PUT" }
    })
  },
  account_paging(data: any) {
    return request({
      url: '/account/paging?page=' + data.page + '&size=' + data.size + '&keyWord=',
      method: "GET"
    })
  },
  account_getById(id: any) {
    return request({
      url: '/account/getById?id=' + id,
      method: "GET"
    })
  }
}