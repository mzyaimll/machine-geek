import request from '@/utils/request'

export default{
  systemUser_add (data) {
    return request({
      url: '/systemUser/add',
      method: "POST",
      data: data
    })
  },
  systemUser_delete (id) {
    return request({
      url: '/systemUser/deleteById',
      method: "POST",
      data: id
    })
  },
  systemUser_update (data) {
    return request({
      url: '/systemUser/updateById',
      method: "POST",
      data: data
    })
  },
  systemUser_query (data) {
    return request({
      url: '/systemUser/list?page='+data.page+'&size='+data.size+'&keyWord='+data.keyWord,
      method: "GET"
    })
  },
  systemUser_getById (id) {
    return request({
      url: '/systemUser/getById?id='+id,
      method: "GET"
    })
  }
}