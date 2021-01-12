/*
 * @Author: GeekMzy
 * @LastEditors: GeekMzy
 * @Date: 2021-01-07 20:29:41
 * @LastEditTime: 2021-01-12 15:32:08
 * @Email: GeekMzy@out-look.com
 * @FilePath: /machine-geek/src/api/modules/authority.ts
 * @Environment: big sur Js
 * @Description: 
 */

import request from '/@/utils/request'

export default {
    /**
     * @description: 获取权限菜单树
     * @param {*}
     * @return {*}
     */
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
    /**
     * @description: 获取当前登录用户的权限
     * @param {*}
     * @return {*}
     */
    authority_tree_current() {
        return request({
            url: '/authority/treeByCurrent',
            method: "GET",
        })
    },
}