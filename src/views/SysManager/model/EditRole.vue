<!--
 * @Author: GeekMzy
 * @LastEditors: GeekMzy
 * @Date: 2021-01-12 18:00:37
 * @LastEditTime: 2021-01-15 14:03:20
 * @Email: GeekMzy@out-look.com
 * @FilePath: /machine-geek/src/views/SysManager/model/EditRole.vue
 * @Environment: big sur Js
 * @Description: 
-->
<template>
  <a-modal
    title="role"
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
        <a-form-item label="role id">
          <a-input :disabled="state.disabled" v-model:value="form.id"></a-input>
        </a-form-item>
        <a-form-item label="role name">
          <a-input
            placeholder="please input name"
            v-model:value="form.name"
          ></a-input>
        </a-form-item>
        <a-form-item label="authorities">
          <a-tree
            checkable
            :replaceFields="state.replaceFields"
            v-model:checkedKeys="form.authorities"
            :tree-data="tree.treeData"
            @select="tree.onSelect"
            @check="tree.onCheck"
          />
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
import { toRefs, defineComponent, reactive, onMounted, compile } from 'vue'
import { message } from 'ant-design-vue'
import api from '/@/api/index'


export default defineComponent({
  setup (props, { emit }) {
    let state = reactive({
      visible: false,
      loading: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 18 },
      disabled: true,
      replaceFields: { children: 'child', title: 'name', key: 'id' }
    })
    let form = reactive({
      id: '',
      name: '',
      authorities: [],
    })
    function changeVisible () {
      state.visible = !state.visible
      resetForm()
    }
    function setData (id) {
      getTree(id)
    }
    function getRoleData (id) {
      state.loading = true
      api.role.role_getById(id).then(res => {
        if (res.success) {
          Object.assign(form, {
            id: res.data.role.id,
            name: res.data.role.name,
            authorities: res.data.authorities.map(x => x.id),
          })
          console.log(form);
          state.loading = false
        }
      })
    }
    function getTree (id) {
      api.authority.authority_tree().then(res => {
        if (res.success) {
          tree.treeData = res.data
          getRoleData(id)
        }
      })
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
        authorities: [],
      })
    }
    const tree = {
      treeData: [],
      onSelect: (selectedKeys, info) => {
      },
      onCheck: (checkedKeys, info) => {
        form.authorities = checkedKeys
      },
    }

    return { ...toRefs({ state, form }), tree, setData, onSubmit, changeVisible }
  },
  data () {
    return {}
  }
})
</script>
<style scoped>
</style>