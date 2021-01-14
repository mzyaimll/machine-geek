<!--
 * @Autor: GeekMzy
 * @Date: 2021-01-14 10:30:02
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-01-14 13:56:58
 * @FilePath: /machine-geek/src/views/SysManager/SystemRole.vue
-->

<template>
  <a-table
    :columns="columns"
    :data-source="table.sourceData"
    :row-key="(record) => record.id"
    :loading="loading"
    bordered
  >
    <template #action="{ record }">
      <a @click="modifyRole(record)">编辑</a>
      <a-divider type="vertical" />
      <a @click="deleteRole(record)">删除</a>
    </template>
  </a-table>
  <eidt-role ref="editRole" @submit="submit"></eidt-role>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, ref, onMounted } from 'vue'
import { PAGE_SIZE } from '/@/static/config'
import api from '/@/api/index'
import EidtRole from './model/EditRole.vue'

export default defineComponent({
  setup(props, context) {
    let state = reactive({})
    let table = reactive({
      sourceData: [],
      loading: false,
      paginate: {
        size: PAGE_SIZE,
        page: 1,
        total: 0,
        keyWord: '',
      },
    })
    const editRole = ref(null)
    onMounted(() => {
      fetch(table.paginate)
    })
    function fetch(param: any) {
      table.loading = true
      api.role.role_query(param).then((res) => {
        if (res.success) {
          table.sourceData = res.data.records
          table.loading = false
        }
      })
    }
    function submit(obj: any) {
      console.log(obj)
    }
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
        title: 'key',
        dataIndex: 'key',
        width: '15%',
      },
      {
        title: 'version',
        dataIndex: 'version',
        width: '15%',
      },
      {
        title: 'createTime',
        dataIndex: 'createTime',
        width: '15%',
      },
      {
        title: 'udateTime',
        dataIndex: 'udateTime',
        width: '15%',
      },
      {
        title: 'action',
        dataIndex: 'action',
        slots: { customRender: 'action' },
      },
    ]
    return {
      ...toRefs({ state, table }),
      columns,
      editRole,
      fetch,
      submit,
    }
  },
  components: {
    EidtRole,
  },
})
</script>
<style lang="scss" scoped>
</style>