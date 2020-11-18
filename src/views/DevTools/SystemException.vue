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
 * @Date: 2020-11-03 22:28:46
 * @LastEditors: JackM
 * @LastEditTime: 2020-11-18 23:43:47
 -->


<template>
  <a-table
    :columns="columns"
    :data-source="state.sourceData"
    :row-selection="rowSelection"
    :row-key="(record) => record.id"
  />
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import api from "/@/api/index";
export default defineComponent({
  setup() {
    let state = reactive({
      sourceData: [],
      paginate: {
        page: 1,
        size: 10,
      },
    });
    function fetch(params = state.paginate) {
      api.systemException.systemException_paging(params).then((res: any) => {
        if (res.success) {
          state.sourceData = res.data.records;
        }
      });
    }
    fetch();
    return {
      state,
      rowSelection,
      fetch,
      columns,
    };
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
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "URI",
    dataIndex: "uri",
    key: "uri",
  },
  {
    title: "请求方法",
    dataIndex: "method",
    key: "method",
  },
  {
    title: "请求参数",
    dataIndex: "parameter",
    key: "parameter",
  },
  {
    title: "IP",
    dataIndex: "ip",
    key: "ip",
  },
  {
    title: "exceptionClass",
    dataIndex: "exceptionClass",
    key: "exceptionClass",
  },
  {
    title: "exceptionMessage",
    dataIndex: "exceptionMessage",
    key: "exceptionMessage",
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
    key: "createTime",
  },
];
</script>