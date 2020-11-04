<template>
  <a-layout id="app" style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" theme="light" collapsible>
      <Logo :show-title="!collapsed" />
      <a-menu
        @click="menuClick"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
      >
        <a-sub-menu v-for="items in data" :key="items.path">
          <template #title>
            <pie-chart-outlined />
            <span>{{ items.name }}</span>
          </template>
          <a-menu-item v-for="item in items.children" :key="item.path">
            <span>{{ item.name }}</span>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-row type="flex" justify="end">
          <a-col class="mr-3">
            <a-button
              type="primary"
              shape="circle"
              size="large"
              @click="this.$router.push('/')"
            >
              <template #icon><HomeFilled /></template>
            </a-button>
          </a-col>
          <a-col class="mr-3">
            <a-button
              type="primary"
              shape="circle"
              size="large"
              @click="this.$router.push('/setting')"
            >
              <template #icon><SettingFilled /></template>
            </a-button>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Start Vue 3 ©2020 Created by ikuokuo
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import Logo from "/@/components/Logo.vue";
import treeData from "/@/treeData";
import MenuIcon from "/@/static/menuIcon";

import {
  // menu
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  // header
  HomeFilled,
  SettingFilled,
} from "@ant-design/icons-vue";

export default {
  name: "App",
  components: {
    Logo,
    // icons
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    HomeFilled,
    SettingFilled,
  },
  data() {
    return {
      data: [],
      MenuIcon,
      collapsed: false,
      selectedKeys: ["1"],
    };
  },
  methods: {
    menuClick(e) {
      if (e) this.$router.push(e.key);
    },
  },
  mounted() {
    this.data = treeData.data;
  },
};
</script>
