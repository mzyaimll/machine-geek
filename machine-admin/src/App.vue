<template>
  <v-app>
    <v-navigation-drawer class="app-drawer" app>
      <div class="flex-row-center drawer-avatar">
        <v-avatar color="primary" size="86">zy</v-avatar>
      </div>
      <div class="drawer-menu">
        <ul>
          <li>123123123</li>
          <li>123123213</li>
          <li>sdasdasd</li>
          <li>asdasdasd</li>
        </ul>
      </div>
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app>
      app-bar
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        main
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      footer
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
.drawer-avatar {
  width: 100%;
  height: 200px;
  padding: 40px;
}
.drawer-menu {
  flex: 1;
  ul {
    width: 100%;
    height: 100%;
    list-style: none;
    li {
      width: 100%;
      height: 60px;
      padding: 0 20px;
    }
  }
}
</style>