<!--
 * @Author: GeekMzy
 * @LastEditors: GeekMzy
 * @Date: 2021-01-12 18:00:37
 * @LastEditTime: 2021-01-14 13:42:37
 * @Email: GeekMzy@out-look.com
 * @FilePath: /machine-geek/src/views/SysManager/model/EditUser.vue
 * @Environment: big sur Js
 * @Description: 
-->
<template>
  <a-modal
    title="用户"
    :width="600"
    :footer="null"
    v-model:visible="state.visible"
  >
    <a-form
      :model="form"
      :label-col="state.labelCol"
      :wrapper-col="state.wrapperCol"
    >
      <a-form-item label="name">
        <a-input
          :disabled="state.disabled"
          placeholder="please input name"
          v-model:value="form.name"
        ></a-input>
      </a-form-item>
      <a-form-item label="password">
        <a-input
          :disabled="state.disabled"
          placeholder="please input password"
          v-model:value="form.password"
        ></a-input>
      </a-form-item>
      <a-form-item label="version">
        <a-input
          :disabled="state.disabled"
          placeholder="please input version"
          v-model:value="form.version"
        ></a-input>
      </a-form-item>
      <a-form-item label="enable">
        <a-switch v-model:checked="form.enable" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 20, offset: 4 }">
        <a-button type="primary" @click="onSubmit"> submit </a-button>
        <a-button style="margin-left: 10px" @click="changeVisible">
          Cancel
        </a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>|
<script>
import { toRefs, defineComponent, reactive } from 'vue'
import { message } from 'ant-design-vue'
export default defineComponent({
  setup (props, { emit }) {
    let state = reactive({
      visible: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 18 },
      disabled: true,
    })
    let form = reactive({
      id: '',
      name: '',
      password: '',
      enable: false,
      version: '',
    })
    function changeVisible () {
      state.visible = !state.visible
    }
    function setData (data) {
      Object.assign(form, data)
      console.log(form);
    }
    function onSubmit () {
      emit('submit', form)   //传输数据
      changeVisible()  //关闭模态框
      resetForm()   //重置表单
    }
    function resetForm () {
      Object.assign(form, {
        id: '',
        name: '',
        enable: false,
        version: '',
      })
    }
    return { ...toRefs({ state, form }), setData, onSubmit, changeVisible }
  },
  data () {
    return {}
  }
})
</script>
<style scoped>
</style>