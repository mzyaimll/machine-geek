<!--
 * @Author: GeekMzy
 * @LastEditors: GeekMzy
 * @Date: 2021-01-12 18:00:37
 * @LastEditTime: 2021-01-14 16:02:34
 * @Email: GeekMzy@out-look.com
 * @FilePath: /machine-geek/src/views/SysManager/model/EditRole.vue
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
      <a-form-item label="rold id">
        <a-input
          :disabled="state.disabled"
          v-model:value="form.roldId"
        ></a-input>
      </a-form-item>
      <a-form-item label="rolem name">
        <a-input
          :disabled="state.disabled"
          placeholder="please input name"
          v-model:value="form.name"
        ></a-input>
      </a-form-item>
      <a-form-item label="desc">
        <a-input
          :disabled="state.disabled"
          placeholder="please input desc"
          v-model:value="form.desc"
        ></a-input>
      </a-form-item>
      <a-form-item label="authority">
        <a-switch v-model:checked="form.authority" />
      </a-form-item>
      <a-form-item label="权限">
        <a-tree
          checkable
          :tree-data="tree.treeData"
          v-model:expandedKeys="tree.expandedKeys"
          v-model:selectedKeys="tree.selectedKeys"
          v-model:checkedKeys="tree.checkedKeys"
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
  </a-modal>
</template>|
<script>
import { toRefs, defineComponent, reactive } from 'vue'
import { message } from 'ant-design-vue'
export default defineComponent({
  setup (props, { emit }) {
    let state = reactive({
      visible: true,
      labelCol: { span: 4 },
      wrapperCol: { span: 18 },
      disabled: true,
    })
    let form = reactive({
      roldId: '',
      name: '',
      desc: '',
      authority: false,
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
        roldId: '',
        name: '',
        desc: '',
        authority: false,
      })
    }
    const tree = {
      treeData: [
        {
          title: 'parent 1',
          key: '0-0',
          children: [
            {
              title: 'parent 1-0',
              key: '0-0-0',
              disabled: true,
              children: [
                { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
                { title: 'leaf', key: '0-0-0-1' },
              ],
            },
            {
              title: 'parent 1-1',
              key: '0-0-1',
              children: [{ key: '0-0-1-0', slots: { title: 'title0010' } }],
            },
          ],
        },
      ],
      expandedKeys: ['0-0-0', '0-0-1'],
      selectedKeys: ['0-0-0', '0-0-1'],
      checkedKeys: ['0-0-0', '0-0-1'],
      onSelect: (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
      },
      onCheck: (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
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