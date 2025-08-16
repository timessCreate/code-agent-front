<template>
  <div class="home-container">
    <div class="hero-section">
      <h1>MCP智能编码平台</h1>
      <p>让编码更智能、更高效，助力开发者实现卓越</p>
      <button class="cta-button" @click="exploreFeatures">探索功能</button>
    </div>
    <div class="features">
      <h2>核心功能</h2>
      <a-row :gutter="[16, 16]">
        <a-col :xs="24" :sm="12" :lg="8">
          <a-card title="智能提示" :bordered="false">
            <p>实时代码补全与智能建议，提升开发效率</p>
          </a-card>
        </a-col>
        <a-col :xs="24" :sm="12" :lg="8">
          <a-card title="代码分析" :bordered="false">
            <p>深入的代码质量分析，帮助发现潜在问题</p>
          </a-card>
        </a-col>
        <a-col :xs="24" :sm="12" :lg="8">
          <a-card title="团队协作" :bordered="false">
            <p>支持多人协作开发，提升团队效率</p>
          </a-card>
        </a-col>
      </a-row>
    </div>

    <div class="testimonials">
      <h2>用户评价</h2>
      <a-carousel :dots="true" autoplay>
        <div class="testimonial-item">
          <p>"MCP平台让我们的开发效率提升了50%！"</p>
          <p class="author">— 王先生，开发经理</p>
        </div>
        <div class="testimonial-item">
          <p>"智能提示功能非常强大，节省了大量时间。"</p>
          <p class="author">— 陈女士，前端工程师</p>
        </div>
      </a-carousel>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.home-container {
  padding: 24px;
  background: linear-gradient(to bottom, #ffffff, #f0f8ff);
}

.hero-section {
  text-align: center;
  margin-bottom: 48px;
}

.hero-section h1 {
  font-size: 2.5rem;
  color: #333;
}

.hero-section p {
  font-size: 1.2rem;
  color: #666;
  margin: 16px 0;
}

.cta-button {
  background: #007bff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.cta-button:hover {
  background: #0056b3;
}

.features {
  margin: 48px 0;
}

.features h2 {
  text-align: center;
  margin-bottom: 24px;
  color: #333;
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
