<!--
 * @Author: GeekMzy
 * @LastEditors: GeekMzy
 * @Date: 2021-01-12 18:00:37
 * @LastEditTime: 2021-01-12 21:55:50
 * @Email: GeekMzy@out-look.com
 * @FilePath: /machine-geek/src/views/SysManager/model/EditUser.vue
 * @Environment: big sur Js
 * @Description: 
-->
<template>
  <a-modal title="账号" v-model:visible="state.visible" @ok="handleOk">
  </a-modal>
</template>
<script>
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup (props, { emit }) {
    let state = reactive({
      visible: false,
      data: {}
    })
    function changeVisible () {
      state.visible = !state.visible
    }
    function setData (data) {
      state.data = data
    }
    function handleOk (e) {
      console.log(state.data);
    }
    return { state, changeVisible, setData, handleOk }
  }
})
</script>
<style scoped>
</style>