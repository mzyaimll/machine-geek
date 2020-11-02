<template>
  <div class=".flex-center">
    <div class="main-drawer">drawer</div>
    <div class="main-header">header</div>
    <div class="main-container">main</div>
  </div>
</template>
<script>
import {defineComponent} from 'vue'
export default defineComponent({
    
})
</script>
<style lang="scss">
@import "./../../style/global.scss"; 
.main-drawer {
  height: 100vh;
  width: 20%;
  min-width: 300px;
  display: flex;
  background-color:$white;
}
</style>