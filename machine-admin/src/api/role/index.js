import request from '@/utils/request'

export default{
  systemRole_add (data) {
    return request({
      url: '/systemRole/add',
      method: "POST",
      data: data
    })
  },
  systemRole_delete (id) {
    return request({
      url: '/systemRole/deleteById',
      method: "POST",
      data: id
    })
  },
  systemRole_update (data) {
    return request({
      url: '/systemRole/updateById',
      method: "POST",
      data: data
    })
  },
  systemRole_query (data) {
    return request({
      url: '/systemRole/list?page='+data.page+'&size='+data.size+'&keyWord='+data.keyWord,
      method: "GET"
    })
  },
  systemRole_getById (id) {
    return request({
      url: '/systemRole/getById?id='+id,
      method: "GET"
    })
  }
}