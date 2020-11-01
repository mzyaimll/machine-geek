/**
 * localstorage 的操作工具
 */
export default {
  set(key:string,val:any) {
    localStorage.setItem(key,val)
  },
  get(key:string):any{
    return localStorage.getItem(key)
  },
  clear(){
    localStorage.clear()
  },
  remove(key:string):boolean {
    localStorage.removeItem(key)
    return !localStorage.getItem(key)
  }
}