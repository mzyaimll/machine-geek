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
 * @LastEditTime: 2020-11-05 21:49:04
 -->
<template>
  <a-table
    :columns="columns"
    :data-source="this.sourceData"
    :row-key="(record) => record.id"
    :loading="loading"
    bordered
  >
    <template
      v-for="col in ['nickname', 'description', 'email', 'phone']"
      v-slot:[col]="{ text, record }"
      :key="col"
    >
      <div>
        <a-input
          v-if="record.editable"
          style="margin: -5px 0"
          :value="text"
          @change="(e) => handleChange(e.target.value, record.key, col)"
        />
        <template v-else>
          {{ text }}
        </template>
      </div>
    </template>
    <template v-slot:operation="{ record }">
      <div class="editable-row-operations">
        <span v-if="record.editable">
          <a @click="save(record.key)">Save</a>
          <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.key)">
            <a>Cancel</a>
          </a-popconfirm>
        </span>
        <span v-else>
          <a
            v-bind="editingKey !== '' ? { disabled: 'disabled' } : {}"
            @click="edit(record.key)"
          >
            Edit
          </a>
        </span>
      </div>
    </template>
  </a-table>
</template>
<script lang="ts">
const columns = [
  {
    title: "id",
    dataIndex: "id",
    width: "10%",
  },
  {
    title: "nickname",
    dataIndex: "nickname",
    width: "15%",
    slots: { customRender: "nickname" },
  },
  {
    title: "description",
    dataIndex: "description",
    width: "15%",
    slots: { customRender: "description" },
  },
  {
    title: "email",
    dataIndex: "email",
    width: "15%",
    slots: { customRender: "email" },
  },
  {
    title: "phone",
    dataIndex: "phone",
    width: "15%",
    slots: { customRender: "phone" },
  },
  {
    title: "ip",
    dataIndex: "ip",
    width: "10%",
    slots: { customRender: "ip" },
  },
  {
    title: "lastLogin",
    dataIndex: "lastLogin",
    width: "20%",
    slots: { customRender: "lastLogin" },
  },
  {
    title: "operation",
    dataIndex: "operation",
    slots: { customRender: "operation" },
  },
];
import { defineComponent } from "vue";
import api from "/@/api/index";
import { PAGE_SIZE } from "/@/static/config";

export default defineComponent({
  data() {
    return {
      sourceData: [],
      columns,
      loading: false,
      editingKey: "",
      paginate: {
        size: PAGE_SIZE,
        page: 1,
        total: 0,
        keyWord: "",
      },
    };
  },
  mounted() {
    this.fetch(this.paginate);
  },
  methods: {
    fetch(param: any) {
      this.loading = true;
      api.user.systemUser_query(param).then((res) => {
        if (res.success) {
          this.sourceData = res.data.records;
          this.loading = false;
        }
      });
    },
    handleChange(value: any, key: any, column: string | number) {},
    edit(key: string) {},
    save(key: any) {},
    cancel(key: any) {},
  },
});
</script>
<style lang="scss" scoped>
</style>