/*
 * @Author: GeekMzy
 * @LastEditors: GeekMzy
 * @Date: 2021-01-07 20:29:41
 * @LastEditTime: 2021-01-09 16:50:03
 * @Email: GeekMzy@out-look.com
 * @FilePath: /machine-geek/src/store/index.ts
 * @Environment: big sur Js
 * @Description: 
 */
import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state: any) {
      state.count++;
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
  },
});
