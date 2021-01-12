/*
 * @Author: GeekMzy
 * @LastEditors: GeekMzy
 * @Date: 2021-01-07 20:29:41
 * @LastEditTime: 2021-01-11 16:50:36
 * @Email: GeekMzy@out-look.com
 * @FilePath: /machine-geek/src/api/modules/authority.ts
 * @Environment: big sur Js
 * @Description: 
 */

import request from '/@/utils/request'

export default {
    authority_tree() {
        return request<{ data: [], success: boolean }>({
            url: '/authority/tree',
            method: "get",
        })
    },
    authority_get(id: Number) {
        return request({
            url: '/authority/getById?id=' + id,
            method: "get",
        })
    },
    authority_modify(data: any) {
        return request({
            url: '/authority/modifyById',
            method: "POST",
            data: data
        })
    },
    authority_add(data: any) {
        return request<{ success: boolean }>({
            url: '/authority/add',
            method: "POST",
            data: data
        })
    },
    authority_paging(data: any) {
        return request({
            url: '/authority/paging?page=' + data.page + '&size=' + data.size + '&keyWord=',
            method: "GET"
        })
    },
    /**
     * @description: 
     * @param {number} id
     * @return {*}
     */
    authority_delete(id: number) {
        return request({
            url: '/authority/deleteById',
            method: "POST",
            data: { id: id, _method: "DELETE" }
        })
    },
}