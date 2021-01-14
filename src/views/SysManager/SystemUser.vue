<!--
 * @Autor: GeekMzy
 * @Date: 2021-01-14 10:30:02
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-01-14 13:54:58
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
        S,
      },
      loading: false,
    })
    const editModel = ref(null)
    function fetch(param: any) {
      table.loading = true
      api.user.account_paging(param).then((res) => {
        if (res.success) {
          Object.assign(table.sourceData, res.data.records)
          table.loading = false
        }
      })
    }
    function deleteUser(obj: any) {
      api.user.account_deleteById(obj.id).then((res) => {
        if (res.success) {
          alert('删除成功')
        }
      })
    }
    function modifyUser(obj: any) {
      editModel.value.changeVisible()
      editModel.value.setData(obj)
    }
    function submit(obj: any) {
      api.user.account_modifyById(obj).then((res) => {
        if (res.success) {
          message.success('modify success!')
          fetch(table.paginate)
        }
      })
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
        title: 'version',
        dataIndex: 'version',
        width: '15%',
      },
      {
        title: 'ip',
        dataIndex: 'ip',
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
    }
  },
  components: {
    EditUser,
  },
})
</script>
<style lang="scss" scoped>
</style>