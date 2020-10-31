/**
 * localstorage 的操作工具
 */
export default {
  set(key,val) {
    localStorage.setItem(key,val)
  },
  get(key){
    return localStorage.getItem(key)
  },
  clear(){
    localStorage.clear()
  },
  remove(key) {
    localStorage.removeItem(key)
    return !localStorage.getItem(key)
  }
}