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
 * @LastEditTime: 2020-11-12 08:38:11
 -->


<template>
  <a-table
    :columns="columns"
    :data-source="state.sourceData"
    :row-selection="rowSelection"
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
      api.codeGenerator.codeGenerator_paging(params).then((res) => {
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
    };
  },
  data() {
    return {
      sourceData: [],
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
    title: "TableName",
    dataIndex: "tableName",
    key: "tableName",
  },
  {
    title: "Engine",
    dataIndex: "engine",
    key: "engine",
  },
  {
    title: "TableComment",
    dataIndex: "tableComment",
    key: "tableComment",
  },
  {
    title: "CreateTime",
    dataIndex: "createTime",
    key: "createTime",
  },
];
</script>