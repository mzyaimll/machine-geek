<!--
 *                        .::::.
 *                      .::::::::.
 *                     :::::::::::
 *                  ..:::::::::::'
 *               '::::::::::::'
 *                 .::::::::::
 *            '::::::::::::::..
 *                 ..::::::::::::.
 *               ``::::::::::::::::
 *                ::::``:::::::::'        .:::.
 *               ::::'   ':::::'       .::::::::.
 *             .::::'      ::::     .:::::::'::::.
 *            .:::'       :::::  .:::::::::' ':::::.
 *           .::'        :::::.:::::::::'      ':::::.
 *          .::'         ::::::::::::::'         ``::::.
 *      ...:::           ::::::::::::'              ``::.
 *     ````':.          ':::::::::'                  ::::..
 *                        '.:::::'                    ':'````..
 * 
 * @Author: JackM
 * @Date: 2020-11-03 22:30:53
 * @LastEditors: JackM
 * @LastEditTime: 2020-11-29 12:58:45
 -->
<template>
  <a-table
    :columns="columns"
    :data-source="this.sourceData"
    :row-key="(record) => record.id"
    :loading="loading"
    bordered
  >
    <template #enable="{ record }">
      <span v-if="record === true">可用</span>
      <span v-else>不可用</span>
    </template>
  </a-table>
</template>
<script lang="ts">
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
    width: '20%',
  },
  {
    title: 'createTime',
    dataIndex: 'createTime',
    width: '20%',
  },
  {
    title: 'updateTime',
    dataIndex: 'operation',
  },
]
import { defineComponent } from 'vue'
import api from '/@/api/index'
import { PAGE_SIZE } from '/@/static/config'

export default defineComponent({
  data() {
    return {
      sourceData: [],
      columns,
      loading: false,
      editingKey: '',
      paginate: {
        size: PAGE_SIZE,
        page: 1,
        total: 0,
        keyWord: '',
      },
    }
  },
  mounted() {
    this.fetch(this.paginate)
  },
  methods: {
    fetch(param: any) {
      this.loading = true
      api.user.account_paging(param).then((res) => {
        if (res.success) {
          this.sourceData = res.data.records
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
</script>
<style lang="scss" scoped>
</style>