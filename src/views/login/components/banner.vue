<template>
  <div class="banner">
    <div class="banner-inner">
      <a-carousel class="carousel" animation-name="fade">
        <a-carousel-item v-for="item in carouselItem" :key="item.slogan">
          <div :key="item.slogan" class="carousel-item">
            <div class="carousel-title">{{ item.slogan }}</div>
            <div class="carousel-sub-title">{{ item.subSlogan }}</div>
            <img class="carousel-image" :src="item.image" />
          </div>
        </a-carousel-item>
      </a-carousel>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import bannerImage from '@/assets/images/login-banner.png';

export default defineComponent({
  setup() {
    const carouselItem = [
      {
        slogan: '正孚OA办公3.0',
        subSlogan: '更高效的管理',
        image: bannerImage,
      },
      {
        slogan: '内置方案',
        subSlogan: '页面配置，状态管理应有尽有',
        image: bannerImage,
      },
      {
        slogan: '接入可视化增强工具AUX',
        subSlogan: '实现灵活的区块式开发',
        image: bannerImage,
      },
    ];
    return {
      carouselItem,
    };
  },
});
</script>

<style lang="less" scoped>
.banner {
  display: flex;
  align-items: center;
  justify-content: center;

  &-inner {
    flex: 1;
    height: 100%;
  }
}

.carousel {
  height: 100%;

  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  &-title {
    color: var(--color-fill-1);
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
  }

  &-sub-title {
    margin-top: 8px;
    color: var(--color-text-3);
    font-size: 14px;
    line-height: 22px;
  }

  &-image {
    width: 320px;
    margin-top: 30px;
  }
}
</style>
