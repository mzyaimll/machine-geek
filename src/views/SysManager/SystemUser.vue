<!--
 * @Autor: GeekMzy
 * @Date: 2021-01-14 10:30:02
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-01-15 11:31:19
 * @FilePath: /machine-geek/src/views/SysManager/SystemUser.vue
-->

<template>
  <div></div>
  <a-table
    :columns="columns"
    :data-source="table.sourceData"
    :row-key="(record) => record.id"
    :loading="table.loading"
    bordered
  >
    <template #enable="{ record }">
      <span v-if="record === true">可用</span>
      <span v-else>不可用</span>
    </template>
    <template #action="{ record }">
      <a @click="resetPwd(record)">重置</a>
      <a-divider type="vertical" />
      <a @click="modifyUser(record)">编辑</a>
      <a-divider type="vertical" />
      <a @click="deleteUser(record)">删除</a>
    </template>
  </a-table>
  <edit-user ref="editModel" @submit="submit"></edit-user>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, ref, onMounted } from 'vue'
import { PAGE_SIZE } from '/@/static/config'
import { message, Modal } from 'ant-design-vue'
import EditUser from './model/EditUser.vue'
import api from '/@/api/index'

export default defineComponent({
  setup(props, context) {
    let table = reactive({
      sourceData: [],
      paginate: {
        size: 10,
        page: 1,
        total: 0,
        keyWord: '',
      },
      loading: false,
    })
    const editModel = ref(null)
    function fetch(param: any) {
      table.loading = true
      api.user.account_paging(param).then((res) => {
        if (res.success) {
          table.sourceData = res.data.records
          table.loading = false
        }
      })
    }
    function deleteUser(obj: any) {
      Modal.confirm({
        title: 'Do you Want to delete these account?',
        onOk() {
          api.user.account_deleteById(obj.id).then((res) => {
            if (res.success) {
              message.success('success')
            }
          })
        },
        onCancel() {
          message.info('cancel')
        },
      })
    }
    function modifyUser(obj: any) {
      editModel.value.changeVisible()
      editModel.value.setData(obj.id)
    }
    function submit(obj: any) {
      api.user.account_modifyById(obj).then((res) => {
        if (res.success) {
          message.success('modify success!')
          fetch(table.paginate)
        }
      })
    }
    function resetPwd(obj: any) {
      console.log(obj)
    }
    onMounted(() => {
      fetch(table.paginate)
    })
    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
        width: '10%',
      },
      {
        title: 'name',
        dataIndex: 'name',
        width: '15%',
      },
      {
        title: 'enable',
        dataIndex: 'enable',
        width: '15%',
        slots: { customRender: 'enable' },
      },
      {
        title: 'email',
        dataIndex: 'email',
        width: '15%',
      },
      {
        title: 'mobile',
        dataIndex: 'mobile',
        width: '10%',
      },
      {
        title: 'lastLogin',
        dataIndex: 'lastLogin',
      },
      {
        title: 'createTime',
        dataIndex: 'createTime',
      },
      {
        title: 'action',
        dataIndex: 'action',
        slots: { customRender: 'action' },
      },
    ]
    return {
      ...toRefs({ table }),
      editModel,
      submit,
      modifyUser,
      fetch,
      deleteUser,
      columns,
      resetPwd,
    }
  },
  components: {
    EditUser,
  },
})
</script>
<style lang="scss" scoped>
</style>