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
 * @LastEditTime: 2020-11-23 19:16:58
 */

import request from '/@/utils/request'

export default {
    systemException_paging(params: any) {
        return request<{ data: [], success: boolean }>({
            url: '/systemException/paging?page=' + params.page + '&size=' + params.size,
            method: "get",
        })
    },
    systemException_find(params: any) {
        return request<{ data: [], success: boolean }>({
            url: '/systemException/paging?page=' + params.page + '&size=' + params.size,
            method: "get",
        })
    },
    systemException_clear() {
        return request<{ data: [], success: boolean }>({
            url: "/systemException/clear",
            method: "POST",
            data: { _method: "DELETE" }
        })
    },
    systemException_deleteById(id: Number) {
        return request<{ data: [], success: boolean }>({
            url: "/systemException/deleteById",
            method: "POST",
            data: { id: id, _method: "DELETE" }
        })
    },
}