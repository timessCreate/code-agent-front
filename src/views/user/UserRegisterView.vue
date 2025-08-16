<template>
  <div class="home-container">
    <div class="features">
      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :sm="12" :lg="8">
          <a-card title="强大功能" :bordered="false">
            <p>提供丰富的功能模块，满足各种业务需求</p>
          </a-card>
        </a-col>
        <a-col :xs="24" :sm="12" :lg="8">
          <a-card title="响应式设计" :bordered="false">
            <p>完美适配各种设备尺寸，提供一致的用户体验</p>
          </a-card>
        </a-col>
        <a-col :xs="24" :sm="12" :lg="8">
          <a-card title="安全可靠" :bordered="false">
            <p>严格的数据安全措施，保障您的信息安全</p>
          </a-card>
        </a-col>
      </a-row>
    </div>

    <button @click="healthCheckResult">{{ healthData ? healthData : '健康检查' }}</button>

    <div class="testimonials">
      <h2>用户评价</h2>
      <a-carousel :dots="true" autoplay>
        <div class="testimonial-item">
          <p>"这个平台改变了我们的工作方式，效率大大提升！"</p>
          <p class="author">— 张先生，技术总监</p>
        </div>
        <div class="testimonial-item">
          <p>"界面美观，操作简单，非常适合我们团队使用。"</p>
          <p class="author">— 李女士，产品经理</p>
        </div>
      </a-carousel>
    </div>
  </div>
</template>

<script setup>
import { healthCheck } from '@/api/healthController'
import { ref } from 'vue'

const healthData = ref(null)
const healthCheckResult = () => {
  healthCheck().then((response) => {
    healthData.value = response.data.data
  })
}
</script>

<style scoped>
.features {
  margin: 48px 0;
}

.testimonials {
  margin: 48px 0;
  text-align: center;
}

.testimonial-item {
  padding: 48px;
  background: #f5f5f5;
  border-radius: 8px;
}

.author {
  margin-top: 16px;
  color: #666;
  font-style: italic;
}
</style>
