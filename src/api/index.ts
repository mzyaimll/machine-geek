/*
 * @Author: GeekMzy
 * @LastEditors: GeekMzy
 * @Date: 2021-01-07 20:29:41
 * @LastEditTime: 2021-01-11 16:48:13
 * @Email: GeekMzy@out-look.com
 * @FilePath: /machine-geek/src/api/index.ts
 * @Environment: big sur Js
 * @Description: 
 */

import user from './modules/user'
import role from './modules/role'
import systemAuthority from './modules/authority'
import common from './modules/common'
import codeGenerator from './modules/codeGenerator'
import systemException from './modules/exception'
import systemDictionary from './modules/dictionary'
import systemFile from './modules/file'

export default {
  user,
  systemAuthority,
  common,
  role,
  codeGenerator,
  systemException,
  systemDictionary,
  systemFile
}