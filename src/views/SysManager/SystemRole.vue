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
 * @LastEditTime: 2020-11-05 22:44:38
 -->
<template>
  <a-table
    :columns="columns"
    :data-source="this.sourceData"
    :row-key="(record) => record.id"
    :loading="loading"
    bordered
  >
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
    title: 'key',
    dataIndex: 'key',
    width: '15%',
  },
  {
    title: 'description',
    dataIndex: 'description',
    width: '15%',
  },
  {
    title: 'version',
    dataIndex: 'version',
    width: '15%',
  },
  {
    title: 'disable',
    dataIndex: 'disable',
    width: '15%',
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
      api.role.role_query(param).then((res) => {
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