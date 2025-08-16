<template>
  <div class="service-container">
    <h1>我们的服务</h1>
    <a-row :gutter="[16, 16]">
      <a-col :xs="24" :md="12" :lg="8">
        <a-card title="服务一" :bordered="false">
          <p>提供高质量的服务内容，满足客户需求。</p>
        </a-card>
      </a-col>
      <a-col :xs="24" :md="12" :lg="8">
        <a-card title="服务二" :bordered="false">
          <p>专业的技术支持，解决各种难题。</p>
        </a-card>
      </a-col>
      <a-col :xs="24" :md="12" :lg="8">
        <a-card title="服务三" :bordered="false">
          <p>创新的解决方案，提升业务效率。</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup></script>

<style scoped>
.service-container {
  padding: 24px;
}

h1 {
  margin-bottom: 24px;
}
</style>
