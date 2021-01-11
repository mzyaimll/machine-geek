/*
 * @Author: GeekMzy
 * @LastEditors: GeekMzy
 * @Date: 2021-01-07 20:29:41
 * @LastEditTime: 2021-01-11 13:16:18
 * @Email: GeekMzy@out-look.com
 * @FilePath: /machine-geek/src/api/modules/codeGenerator.ts
 * @Environment: big sur Js
 * @Description: 
 */

import request from '/@/utils/request'

export default {
    generator_paging(params: any) {
        return request<{ data: any, success: boolean }>({
            url: '/generator/paging?page=' + params.page + '&size=' + params.size,
            method: "get",
        })
    },
    generator_generate(params: any) {
        return request<{ data: [], success: boolean }>({
            url: '/generator/generate?moduleName=' + params.moduleName + '&tableName=' + params.tableName,
            method: "get",
        })
    }
}