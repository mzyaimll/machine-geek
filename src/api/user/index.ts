import request from './../../utils/request'

export default{
  systemUser_add (data:any) {
    return request({
      url: '/systemUser/add',
      method: "POST",
      data: data
    })
  },
  systemUser_delete (id:number) {
    return request({
      url: '/systemUser/deleteById',
      method: "POST",
      data: id
    })
  },
  systemUser_update (data:any) {
    return request({
      url: '/systemUser/updateById',
      method: "POST",
      data: data
    })
  },
  systemUser_query (data:any) {
    return request({
      url: '/systemUser/list?page='+data.page+'&size='+data.size+'&keyWord='+data.keyWord,
      method: "GET"
    })
  },
  systemUser_getById (id:any) {
    return request({
      url: '/systemUser/getById?id='+id,
      method: "GET"
    })
  }
}