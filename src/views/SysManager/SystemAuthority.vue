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
 * @LastEditTime: 2020-11-18 21:40:59
 -->
<template>
  <a-table
    :columns="columns"
    :data-source="treeData"
    :row-selection="rowSelection"
    :row-key="(record) => record.id"
  />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import api from "/@/api/index";
import { PAGE_SIZE } from "/@/static/config";

export default defineComponent({
  data() {
    return {
      columns,
      rowSelection,
      treeData: [],
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      api.systemAuthority.authority_getTree().then((res) => {
        if (res.success) {
          this.treeData = res.data;
        }
      });
    },
    handleChange(value: any, key: any, column: string | number) {},
    edit(key: string) {},
    save(key: any) {},
    cancel(key: any) {},
  },
});
const rowSelection = {
  onChange: (selectedRowKeys: any, selectedRows: any) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  onSelect: (record: any, selected: any, selectedRows: any) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected: any, selectedRows: any, changeRows: any) => {
    console.log(selected, selectedRows, changeRows);
  },
};

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Key",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Path",
    dataIndex: "path",
    key: "path",
  },
  {
    title: "UpdateTime",
    dataIndex: "updateTime",
    key: "updateTime",
  },
];
</script>
<style lang="scss" scoped>
</style>