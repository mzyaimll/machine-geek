/*
 * @Author: GeekMzy
 * @LastEditors: GeekMzy
 * @Date: 2021-01-07 20:29:41
 * @LastEditTime: 2021-01-11 13:02:33
 * @Email: GeekMzy@out-look.com
 * @FilePath: /machine-geek/src/api/modules/role.ts
 * @Environment: big sur Js
 * @Description: 
 */

import request from '../../utils/request'

export default {
  role_add(data: any) {
    return request({
      url: '/role/add',
      method: "POST",
      data: data
    })
  },
  role_delete(id: number) {
    return request({
      url: '/role/deleteById',
      method: "POST",
      data: id
    })
  },
  role_update(data: any) {
    return request({
      url: '/role/modifyById',
      method: "POST",
      data: data
    })
  },
  role_query(data: any) {
    return request({
      url: '/role/paging?page=' + data.page + '&size=' + data.size + '&keyWord=' + data.keyWord,
      method: "GET"
    })
  },
  role_getById(id: Number) {
    return request({
      url: '/role/getById?id=' + id,
      method: "GET"
    })
  },
}