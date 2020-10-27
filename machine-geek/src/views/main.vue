<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="inline"
        @click="handleClick"
        v-model:selectedKeys="selectedKeys"
      >
        <a-menu-item v-for="item in routers" :key="item.path">
          <router-link :to="item.path">
            <user-outlined />
            <span>{{ item.meta.title }}</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="main-header" style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <a-menu v-model:selectedKeys="current" mode="horizontal">
          <a-menu-item key="mail">
            <mail-outlined />Navigation One
          </a-menu-item>
          <a-menu-item key="app" disabled>
            <appstore-outlined />Navigation Two
          </a-menu-item>
          <a-sub-menu>
            <template v-slot:title>
              <span class="submenu-title-wrapper">
                <setting-outlined />
                Navigation Three - Submenu
              </span>
            </template>
            <a-menu-item-group title="Item 1">
              <a-menu-item key="setting:1"> Option 1 </a-menu-item>
              <a-menu-item key="setting:2"> Option 2 </a-menu-item>
            </a-menu-item-group>
            <a-menu-item-group title="Item 2">
              <a-menu-item key="setting:3"> Option 3 </a-menu-item>
              <a-menu-item key="setting:4"> Option 4 </a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
          <a-menu-item key="alipay">
            <a
              href="https://antdv.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Navigation Four - Link
            </a>
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import routes from "@/router/index";

import { defineComponent } from "vue";

export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup(props, context) {
    return {};
  },
  data() {
    return {
      routers: [],
      selectedKeys: ["1"],
      collapsed: false,
    };
  },
  methods: {
    handleClick(e) {
      // this.$router.push(e.key)
    },
  },
  mounted() {
    this.routers = routes.options.routes[0].children;
  },
});
</script>
<style>
#components-layout-demo-custom-trigger {
  height: 100vh;
  min-height: 1220px;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.main-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>