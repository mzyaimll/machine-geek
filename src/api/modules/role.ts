/*
 *                                                     __----~~~~~~~~~~~------___
 *                                    .  .   ~~//====......          __--~ ~~
 *                    -.            \_|//     |||\\  ~~~~~~::::... /~
 *                 ___-==_       _-~o~  \/    |||  \\            _/~~-
 *         __---~~~.==~||\=_    -_--~/_-~|-   |\\   \\        _/~
 *     _-~~     .=~    |  \\-_    '-~7  /-   /  ||    \      /
 *   .~       .~       |   \\ -_    /  /-   /   ||      \   /
 *  /  ____  /         |     \\ ~-_/  /|- _/   .||       \ /
 *  |~~    ~~|--~~~~--_ \     ~==-/   | \~--===~~        .\
 *           '         ~-|      /|    |-~\~~       __--~~
 *                       |-~~-_/ |    |   ~\_   _-~            /\
 *                            /  \     \__   \/~                \__
 *                        _--~ _/ | .-~~____--~-/                  ~~==.
 *                       ((->/~   '.|||' -_|    ~~-/ ,              . _||
 *                                  -_     ~\      ~~---l__i__i__i--~~_/
 *                                  _-~-__   ~)  \--______________--~~
 *                                //.-~~~-~_--~- |-------~~~~~~~~
 *                                       //.-~~~--\
 *                       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *                               神兽保佑            永无BUG
 * 
 * @Author: JackM
 * @Date: 2020-11-02 22:01:53
 * @LastEditors: JackM
 * @LastEditTime: 2020-11-23 19:35:32
 */

import request from '../../utils/request'

export default {
  systemRole_add(data: any) {
    return request({
      url: '/systemRole/add',
      method: "POST",
      data: data
    })
  },
  systemRole_delete(id: number) {
    return request({
      url: '/systemRole/deleteById',
      method: "POST",
      data: id
    })
  },
  systemRole_update(data: any) {
    return request({
      url: '/systemRole/updateById',
      method: "POST",
      data: data
    })
  },
  systemRole_query(data: any) {
    return request({
      url: '/systemRole/paging?page=' + data.page + '&size=' + data.size + '&keyWord=' + data.keyWord,
      method: "GET"
    })
  },
  systemRole_getById(id: Number) {
    return request({
      url: '/systemRole/getById?id=' + id,
      method: "GET"
    })
  },
  systemRole_addWithAuthority(data: any) {
    return request({
      url: '/systemRole/addWithAuthority',
      method: "POST",
      data: data
    })
  },
}