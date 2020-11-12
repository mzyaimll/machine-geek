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
 * @LastEditTime: 2020-11-12 08:39:07
 */

import request from '/@/utils/request'

export default {
    codeGenerator_paging(params: any) {
        return request<{ data: any, success: boolean }>({
            url: '/codeGenerator/pagingTableByDatabaseName?page=' + params.page + '&size=' + params.size,
            method: "get",
        })
    },
    codeGenerator_generate(params: any) {
        return request<{ data: [], success: boolean }>({
            url: '/codeGenerator/generate?moduleName=' + params.moduleName + '&tableName=' + params.tableName,
            method: "get",
        })
    }
}