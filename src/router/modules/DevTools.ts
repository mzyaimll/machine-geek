/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 * 
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *            佛祖保佑       永不宕机     永无BUG
 * 
 * @Author: JackM
 * @Date: 2020-11-03 22:10:49
 * @LastEditors: JackM
 * @LastEditTime: 2020-11-03 22:55:04
 */

export default {
    path: "/DevTools",
    name: "DevTools",
    redirect: "/DevTools/CodeGenerator",
    component: () => import("/@/views/DevTools/index.vue"),
    children: [
        {
            path: "/DevTools/CodeGenerator",
            name: "CodeGenerator",
            component: () => import("/@/views/DevTools/CodeGenerator.vue"),
        },
        {
            path: "/DevTools/DataInfo",
            name: "DataInfo",
            component: () => import("/@/views/DevTools/DataInfo.vue"),
        },
        {
            path: "/DevTools/ExceptionInfo",
            name: "ExceptionInfo",
            component: () => import("/@/views/DevTools/ExceptionInfo.vue"),
        },
    ]
}
