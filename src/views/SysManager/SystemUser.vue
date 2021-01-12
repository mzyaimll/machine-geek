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
  <edit-user ref="editModel"></edit-user>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import api from '/@/api/index'
import { PAGE_SIZE } from '/@/static/config'
import EditUser from './model/EditUser.vue'
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
    deleteUser(obj: any) {
      api.user.account_deleteById(obj.id).then((res) => {
        if (res.success) {
          alert('删除成功')
        }
      })
    },
    modifyUser(obj: any) {
      this.$refs.editModel.changeVisible()
      this.$refs.editModel.setData(obj)
    },
    submit() {},
  },
  components: {
    EditUser,
  },
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
</script>
<style lang="scss" scoped>
</style>