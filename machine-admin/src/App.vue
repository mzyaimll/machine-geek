<template>
<div>
  <div class="main-drawer">
    drawer
  </div>
  <div class="main-header">
    header
  </div>
  <div class="main-container">
    main
    <router-view></router-view>
  </div>
</div>
</template>

<script>

export 
default {
  name: 'App',
  components: {
  }
}
</script>
<style lang="scss">
@import "./index.scss"; 
.main-drawer {
  display: flex;
  color:$red;
}
</style>
