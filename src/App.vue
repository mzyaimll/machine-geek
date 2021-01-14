<!--
 * @Autor: GeekMzy
 * @Date: 2021-01-14 10:30:02
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-01-14 11:39:02
 * @FilePath: /machine-geek/src/App.vue
-->
<template>
  <router-view></router-view>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({});
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
