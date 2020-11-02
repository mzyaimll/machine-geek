<template>
  <div class="main-layout">
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
<style scoped>
@import url('./main.css');
$blue: #056ef0;
.main-layout {
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: row;
    background-color: $blue;
}
</style>