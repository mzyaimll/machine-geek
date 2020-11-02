/**
 * 解决Ts无法识别vue文件的问题
 */
declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
  }