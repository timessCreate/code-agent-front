<template>
  <a-layout class="layout-container">
    <div class="header">
      <GlobalHeader />
    </div>
    <a-layout-content class="main-content">
      <div class="content-wrapper">
        <router-view />
      </div>
    </a-layout-content>
    <div class="footer">
      <GlobalFooter />
    </div>
  </a-layout>
</template>

<script setup>
import GlobalHeader from '../components/GlobalHeader.vue'
import GlobalFooter from '../components/GlobalFooter.vue'
</script>

<style scoped>
.layout-container {
  height: 100vh; /* 视口高度 */
  display: flex;
  flex-direction: column;
  overflow: hidden; /* 禁止全局滚动 */
}

.header {
  flex-shrink: 0; /* 禁止压缩 */
  height: 64px; /* 假设 header 高度为 64px */
}

.footer {
  flex-shrink: 0; /* 禁止压缩 */
  height: 48px; /* 假设 footer 高度为 48px */
}

.main-content {
  flex: 1; /* 填充剩余空间 */
  overflow: auto; /* 允许内部滚动 */
  /* padding: 24px; */
  background: #fff;
}

.content-wrapper {
  /* 关键：计算剩余高度（视口高度 - header - footer - padding） */
  height: calc(100vh - 64px - 48px); /* 24px padding × 2 */
  overflow: auto; /* 允许内容滚动 */
}
</style>
