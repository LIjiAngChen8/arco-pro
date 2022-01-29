<template>
  <a-col class="banner">
    <a-col :span="8">
      <a-typography-title :heading="5" style="margin-top: 0">
        {{ $t('workplace.welcome') }} {{ userInfo.name }}
      </a-typography-title>
    </a-col>
    <a-divider class="panel-border" />
  </a-col>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  setup() {
    const store = useStore();
    const userInfo = computed(() => {
      const { name } = store.state.user;
      return {
        name,
      };
    });
    return {
      userInfo,
    };
  },
});
</script>

<style scoped lang="less">
.banner {
  width: 100%;
  padding: 20px 20px 0 20px;
  background-color: var(--color-bg-2);
  border-radius: 4px 4px 0 0;
}

.test {
  width: 32px;
  height: 100%;
  color: #fff;
  background-color: rgb(var(--primary-6));
  border-top-right-radius: var(--border-radius-small);
  border-bottom-right-radius: var(--border-radius-small);
}

:deep(.arco-icon-home) {
  margin-right: 6px;
}
</style>
