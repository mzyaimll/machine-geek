/*
 * @Author: GeekMzy
 * @LastEditors: GeekMzy
 * @Date: 2021-01-07 20:29:41
 * @LastEditTime: 2021-01-12 11:55:13
 * @Email: GeekMzy@out-look.com
 * @FilePath: /machine-geek/src/api/modules/codeGenerator.ts
 * @Environment: big sur Js
 * @Description: 
 */

import request from '/@/utils/request'
import axios from 'axios'
import lockr from '/@/utils/lockr'

export default {
    generator_paging(params: any) {
        return request<{ data: any, success: boolean }>({
            url: '/generator/paging?page=' + params.page + '&size=' + params.size,
            method: "get",
        })
    },
    generator_generate(params: any) {
        axios.get("/api/generator/generate", {
            params: params,
            responseType: "blob",
            headers: {
                Token: lockr.get('Token')
            }
        }).then(res => {
            if (!res.data) {
                return
            }
            let url = window.URL.createObjectURL(new Blob([res.data]))
            let link = document.createElement('a')
            link.style.display = "none"
            link.href = url
            link.setAttribute("download", "code.zip")

            document.body.appendChild(link)
            link.click()
        })
    }
}