<!--
 * @Author: GeekMzy
 * @LastEditors: GeekMzy
 * @Date: 2021-01-12 18:00:37
 * @LastEditTime: 2021-01-15 11:06:57
 * @Email: GeekMzy@out-look.com
 * @FilePath: /machine-geek/src/views/SysManager/model/EditUser.vue
 * @Environment: big sur Js
 * @Description: 
-->
<template>
  <a-modal
    title="account"
    :width="600"
    :footer="null"
    v-model:visible="state.visible"
  >
    <a-spin :spinning="state.loading">
      <a-form
        :model="form"
        :label-col="state.labelCol"
        :wrapper-col="state.wrapperCol"
      >
        <a-form-item label="email">
          <a-input
            :disabled="state.disabled"
            placeholder="please input email"
            v-model:value="form.email"
          ></a-input>
        </a-form-item>
        <a-form-item label="mobile">
          <a-input
            :disabled="state.disabled"
            placeholder="please input mobile"
            v-model:value="form.mobile"
          ></a-input>
        </a-form-item>
        <a-form-item label="role">
          <a-select
            v-model:value="form.roleIds"
            mode="tags"
            style="width: 100%"
            placeholder="please select the role of account"
            @change="selectRole"
          >
            <a-select-option v-for="item in state.roleList" :key="item.id">
              {{ item.name }}
            </a-select-option>
          </a-select>
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
    </a-spin>
  </a-modal>
</template>|
<script>
import { toRefs, defineComponent, reactive, onMounted } from 'vue'
import { message } from 'ant-design-vue'
import api from '/@/api/index'

export default defineComponent({
  setup (props, { emit }) {
    let state = reactive({
      visible: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 18 },
      disabled: false,
      loading: false,
      roleList: []
    })
    let form = reactive({
      id: '',
      mobile: '',
      email: '',
      roleIds: [''],
      enable: false,
    })
    onMounted(() => {
      fetch()
    })
    function fetch () {
      api.role.role_all().then(res => {
        if (res.success) {
          state.roleList = res.data
        }
      })
    }
    function changeVisible () {
      state.visible = !state.visible
      resetForm()   //重置表单
    }
    function setData (id) {
      state.loading = true
      api.user.account_getById(id).then(res => {
        if (res.success) {
          Object.assign(form, {
            id: res.data.account.id,
            mobile: res.data.account.mobile,
            email: res.data.account.email,
            enable: res.data.account.enable,
            roleIds: res.data.roles.map(x => x.id)
          })
          state.loading = false
        }
      })
    }
    function onSubmit () {
      emit('submit', form)   //传输数据
      changeVisible()  //关闭模态框
    }
    function selectRole (value) {
      form.roleIds = value
    }
    function resetForm () {
      Object.assign(form, {
        id: '',
        mobile: '',
        email: '',
        roleIds: [],
        enable: false,
      })
    }
    return { ...toRefs({ state, form }), selectRole, setData, onSubmit, changeVisible }
  },
  data () {
    return {}
  }
})
</script>
<style scoped>
</style>