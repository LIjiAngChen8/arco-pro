<template>
  <div class="container">
    <Breadcrumb
      :items="['menu.unifiedUser', 'menu.unifiedUser.leaderManage']"
    />
    <h1>领导管理</h1>
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
