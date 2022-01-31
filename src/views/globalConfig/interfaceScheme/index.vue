<template>
  <div class="container">
    <Breadcrumb
      :items="['menu.globalConfig', 'menu.globalConfig.interfaceScheme']"
    />
    <h1>界面管理</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
  setup() {
    //
  },
});
</script>

<style scoped lang="less">
.container {
  padding: 0 20px 20px 20px;
}
</style>
