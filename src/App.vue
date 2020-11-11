<template>
  <a-layout id="app" style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" theme="light" collapsible>
      <Logo :show-title="!collapsed" />
      <a-menu
        @click="menuClick"
        v-model:selectedKeys="state.selectedKeys"
        mode="inline"
      >
        <template v-for="items in state.data">
          <a-menu-item v-if="items.children.length === 0" :key="items.path">
            <svg
              class="icon"
              style="width: 15px; height: 15px"
              aria-hidden="true"
            >
              <use :xlink:href="'#icon' + MenuIcon.get(items.key)"></use>
            </svg>
            <span class="menu_text">{{ items.name }}</span>
          </a-menu-item>
          <a-sub-menu v-else :key="items.path">
            <template #title>
              <svg
                class="icon"
                style="width: 15px; height: 15px"
                aria-hidden="true"
              >
                <use :xlink:href="'#icon' + MenuIcon.get(items.key)"></use>
              </svg>
              <span class="menu_text">{{ items.name }}</span>
            </template>
            <a-menu-item v-for="item in items.children" :key="item.path">
              <svg
                class="icon"
                style="width: 15px; height: 15px"
                aria-hidden="true"
              >
                <use :xlink:href="'#icon' + MenuIcon.get(item.key)"></use>
              </svg>
              <span class="menu_text">{{ item.name }}</span>
            </a-menu-item>
          </a-sub-menu>
        </template>
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
              @click="this$router.push('/setting')"
            >
              <template #icon><SettingFilled /></template>
            </a-button>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>{{ breadcrumb[0] }}</a-breadcrumb-item>
          <a-breadcrumb-item>{{ breadcrumb[1] }}</a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Start Vue 3 ©2020 Created by JackM
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import Logo from "/@/components/Logo.vue";
import treeData from "/@/treeData";
import MenuIcon from "/@/static/menuIcon";
import { getCurrentInstance, defineComponent, reactive } from "vue";
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

export default defineComponent({
  setup(props, ctx) {
    let instance = getCurrentInstance();
    const state = reactive({
      data: [],
      selectedKeys: [],
    });
    state.selectedKeys.push("1");
    console.log(MenuIcon.get("DATACENTER"));
    state.data = treeData.data;
    return {
      state,
    };
  },
  data() {
    return {
      breadcrumb: [],
      MenuIcon,
      collapsed: false,
    };
  },
  methods: {
    menuClick(e) {
      if (e) {
        this.breadcrumb = e.key.slice(1).split("/");
        this.$router.push(e.key);
      }
    },
  },
  components: {
    Logo,
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    HomeFilled,
    SettingFilled,
  },
});
</script>
<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.menu_text {
  margin-left: 5px;
}
</style>
