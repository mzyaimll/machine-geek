<template>
  <div class="flex-colum-center main-layout">
    <div class="flex-row-between main-header">
      <p>数据中心</p>
      <p>年月日</p>
    </div>
     <div class="flex-row-center main-row2">
      <div class="row2-item1"></div>
      <div class="row2-item2"></div>
      <div class="row2-item3"></div>
    </div>
    <div class="flex-row-center main-row1">
      <div class="row1-left"></div>
      <div class="row1-right"></div>
    </div>
    <div class="flex-row-center main-row3">
      <div class="row3-item1"></div>
      <div class="row3-item2"></div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  setup() {},
  data() {},
  methods: {},
};
</script>
<style lang="scss">
@mixin item-common {
  border-radius: 8px;
  background-color: white;
}
.main-layout {
  width: 100%;
  min-width: 1600px;
  .main-header {
    height: 40px;
    padding: 0 10px;
  }
  .main-row1 {
    width: 100%;
    height: 400px;
    .row1-left {
      width: calc(100% * 0.65);
      min-width: 1120px;
      margin: 4px 10px 10px 10px;
      @include item-common;
    }
    .row1-right {
      flex: 1;
      margin: 4px 10px 10px 10px;
      @include item-common;
    }
  }
  @mixin main-row-common {
    flex: 1;
    margin: 10px;
    @include item-common;
  }
  .main-row2 {
    width: 100%;
    height: 400px;
    .row2-item1 {
      @include main-row-common;
    }
    .row2-item2 {
      @include main-row-common;
    }
    .row2-item3 {
      width: calc((100% * 0.333));
      margin: 10px;
      @include item-common;
    }
  }
  .main-row3 {
    width: 100%;
    height: 500px;
    .row3-item1 {
      @include main-row-common;
    }
    .row3-item2 {
      @include main-row-common;
    }
  }
}
</style>