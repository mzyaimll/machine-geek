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
 * @LastEditTime: 2020-11-23 19:19:23
 */

import request from '/@/utils/request'

export default {
    authority_getTree() {
        return request<{ data: [], success: boolean }>({
            url: '/systemAuthority/tree',
            method: "get",
        })
    },
    authority_getById(id: Number) {
        return request({
            url: '/systemAuthority/getById?id=' + id,
            method: "get",
        })
    },
    authority_modifyById(data: any) {
        return request({
            url: '/systemAuthority/modifyById',
            method: "POST",
            data: data
        })
    },
}