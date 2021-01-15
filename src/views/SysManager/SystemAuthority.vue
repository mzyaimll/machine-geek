<!--
 * @Author: GeekMzy
 * @LastEditors: GeekMzy
 * @Date: 2021-01-07 20:29:41
 * @LastEditTime: 2021-01-15 14:35:18
 * @Email: GeekMzy@out-look.com
 * @FilePath: /machine-geek/src/views/SysManager/SystemAuthority.vue
 * @Environment: big sur Js
 * @Description: 
-->

<template>
  <a-table
    :columns="columns"
    :data-source="treeData"
    childrenColumnName="child"
    :loading="loading"
  >
  </a-table>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import api from '/@/api/index'
import { PAGE_SIZE } from '/@/static/config'

export default defineComponent({
  data() {
    return {
      columns,
      rowSelection,
      treeData: [],
      loading: false,
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    fetch() {
      this.loading = true
      api.authority.authority_tree_current().then((res) => {
        if (res.success) {
          this.treeData = res.data.routes
          this.loading = false
        }
      })
    },
    handleChange(value: any, key: any, column: string | number) {},
    edit(key: string) {},
    save(key: any) {},
    cancel(key: any) {},
  },
})
const rowSelection = {
  onChange: (selectedRowKeys: any, selectedRows: any) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    )
  },
  onSelect: (record: any, selected: any, selectedRows: any) => {
    console.log(record, selected, selectedRows)
  },
  onSelectAll: (selected: any, selectedRows: any, changeRows: any) => {
    console.log(selected, selectedRows, changeRows)
  },
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Key',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Path',
    dataIndex: 'uri',
    key: 'uri',
  },
  {
    title: 'UpdateTime',
    dataIndex: 'updateTime',
    key: 'updateTime',
  },
]
</script>
<style lang="scss" scoped>
</style>