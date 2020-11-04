<!--
 * ......................................&&.........................
 * ....................................&&&..........................
 * .................................&&&&............................
 * ...............................&&&&..............................
 * .............................&&&&&&..............................
 * ...........................&&&&&&....&&&..&&&&&&&&&&&&&&&........
 * ..................&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&..............
 * ................&...&&&&&&&&&&&&&&&&&&&&&&&&&&&&.................
 * .......................&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&.........
 * ...................&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&...............
 * ..................&&&   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&............
 * ...............&&&&&@  &&&&&&&&&&..&&&&&&&&&&&&&&&&&&&...........
 * ..............&&&&&&&&&&&&&&&.&&....&&&&&&&&&&&&&..&&&&&.........
 * ..........&&&&&&&&&&&&&&&&&&...&.....&&&&&&&&&&&&&...&&&&........
 * ........&&&&&&&&&&&&&&&&&&&.........&&&&&&&&&&&&&&&....&&&.......
 * .......&&&&&&&&.....................&&&&&&&&&&&&&&&&.....&&......
 * ........&&&&&.....................&&&&&&&&&&&&&&&&&&.............
 * ..........&...................&&&&&&&&&&&&&&&&&&&&&&&............
 * ................&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&............
 * ..................&&&&&&&&&&&&&&&&&&&&&&&&&&&&..&&&&&............
 * ..............&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&....&&&&&............
 * ...........&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&......&&&&............
 * .........&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&.........&&&&............
 * .......&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&...........&&&&............
 * ......&&&&&&&&&&&&&&&&&&&...&&&&&&...............&&&.............
 * .....&&&&&&&&&&&&&&&&............................&&..............
 * ....&&&&&&&&&&&&&&&.................&&...........................
 * ...&&&&&&&&&&&&&&&.....................&&&&......................
 * ...&&&&&&&&&&.&&&........................&&&&&...................
 * ..&&&&&&&&&&&..&&..........................&&&&&&&...............
 * ..&&&&&&&&&&&&...&............&&&.....&&&&...&&&&&&&.............
 * ..&&&&&&&&&&&&&.................&&&.....&&&&&&&&&&&&&&...........
 * ..&&&&&&&&&&&&&&&&..............&&&&&&&&&&&&&&&&&&&&&&&&.........
 * ..&&.&&&&&&&&&&&&&&&&&.........&&&&&&&&&&&&&&&&&&&&&&&&&&&.......
 * ...&&..&&&&&&&&&&&&.........&&&&&&&&&&&&&&&&...&&&&&&&&&&&&......
 * ....&..&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&...........&&&&&&&&.....
 * .......&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&..............&&&&&&&....
 * .......&&&&&.&&&&&&&&&&&&&&&&&&..&&&&&&&&...&..........&&&&&&....
 * ........&&&.....&&&&&&&&&&&&&.....&&&&&&&&&&...........&..&&&&...
 * .......&&&........&&&.&&&&&&&&&.....&&&&&.................&&&&...
 * .......&&&...............&&&&&&&.......&&&&&&&&............&&&...
 * ........&&...................&&&&&&.........................&&&..
 * .........&.....................&&&&........................&&....
 * ...............................&&&.......................&&......
 * ................................&&......................&&.......
 * .................................&&..............................
 * ..................................&..............................
 * 
 * @Author: JackM
 * @Date: 2020-11-03 22:30:53
 * @LastEditors: JackM
 * @LastEditTime: 2020-11-04 08:40:32
 -->

<template>
  <a-table :columns="columns" :data-source="data" bordered>
    <template
      v-for="col in ['nickname', 'description', 'email', 'phone']"
      v-slot:[col]="{ text, record, index }"
    >
      <div :key="col">
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
    <template v-slot:operation="{ text, record, index }">
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
import { defineComponent } from "vue";
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
const data: any = [
  {
    id: "1",
    username: "admin",
    password: "$2a$10$ygZQ5b508eevxCGV6NBNAuRVs3qkfSBgOqpa2PsyM11rkPloNTKkq",
    picture: "/static/Administrator.jpg",
    nickname: "超级管理员",
    description: "超级管理员",
    email: "794763733@qq.com",
    phone: "18106666986",
    ip: "127.0.0.1",
    disable: false,
    version: 0,
    lastLogin: "2020-10-26 17:36:43",
    createTime: "2020-10-26 17:36:47",
    updateTime: "2020-10-26 17:36:50",
  },
];

export default defineComponent({
  data() {
    return {
      data,
      columns,
      editingKey: "",
    };
  },
  mounted() {
    this.cacheData = data.map((item: any) => ({ ...item }));
    console.log(this.cacheData);
  },
  methods: {
    handleChange(value: any, key: any, column: string | number) {
      const newData = [...this.data];
      const target = newData.filter((item) => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    edit(key: string) {
      const newData = [...this.data];
      const target = newData.filter((item) => key === item.key)[0];
      this.editingKey = key;
      if (target) {
        target.editable = true;
        this.data = newData;
      }
    },
    save(key: any) {
      const newData = [...this.data];
      const newCacheData = [...this.cacheData];
      const target = newData.filter((item) => key === item.key)[0];
      const targetCache = newCacheData.filter((item) => key === item.key)[0];
      if (target && targetCache) {
        delete target.editable;
        this.data = newData;
        Object.assign(targetCache, target);
        this.cacheData = newCacheData;
      }
      this.editingKey = "";
    },
    cancel(key: any) {
      const newData = [...this.data];
      const target = newData.filter((item) => key === item.key)[0];
      this.editingKey = "";
      if (target) {
        Object.assign(
          target,
          this.cacheData.filter((item: { key: any }) => key === item.key)[0]
        );
        delete target.editable;
        this.data = newData;
      }
    },
  },
});
</script>
<style lang="scss" scoped>
</style>