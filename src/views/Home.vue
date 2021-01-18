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
          <a-menu-item v-if="items.child.length === 0" :key="items.uri">
            <svg
              :class="!collapsed ? 'icon' : 'icon menu-collapsed'"
              aria-hidden="true"
            >
              <use :xlink:href="'#icon' + MenuIcon.get(items.key)"></use>
            </svg>
            <span class="menu_text">{{ items.name }}</span>
          </a-menu-item>
          <a-sub-menu v-else :key="items.uri">
            <template #title>
              <svg
                :class="!collapsed ? 'icon' : 'icon menu-collapsed'"
                aria-hidden="true"
              >
                <use :xlink:href="'#icon' + MenuIcon.get(items.key)"></use>
              </svg>
              <span class="menu_text">{{ items.name }}</span>
            </template>
            <a-menu-item v-for="item in items.child" :key="item.uri">
              <svg
                :class="!collapsed ? 'icon' : 'icon menu-collapsed'"
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
        ©2020 Created by JackM
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import Logo from "/@/components/Logo.vue";
import MenuIcon from "/@/static/menuIcon";
import { getCurrentInstance, defineComponent, reactive, onMounted } from "vue";
import lockr from '/@/utils/lockr'
import {
  // header
  HomeFilled,
  SettingFilled,
} from "@ant-design/icons-vue";
import api from '/@/api/index'

export default defineComponent({
  setup (props, ctx) {
    let instance = getCurrentInstance();
    const state = reactive({
      data: [],
      menuStyle: "icon menu-collapsed",
      selectedKeys: [],
    });
    state.selectedKeys.push("1");

    function fetch () {
      api.authority.authority_get_my_authorities().then(res => {
        if (res.success) {
          state.data = res.data.routes
        }
      })
    }
    onMounted(() => {
      fetch()
    })
    return {
      state,
    };
  },
  data () {
    return {
      breadcrumb: [],
      MenuIcon,
      collapsed: false,
    };
  },
  methods: {
    menuClick (e) {
      if (e) {
        this.breadcrumb = e.key.slice(1).split("/");
        this.$router.push(e.key);
      }
    },
  },
  components: {
    Logo,
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
.menu-collapsed {
  transition: all ease;
  margin-right: 40px;
}
</style>
