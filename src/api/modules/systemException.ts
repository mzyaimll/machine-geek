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
 * @LastEditTime: 2020-11-20 00:52:00
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
    }
}