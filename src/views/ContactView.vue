<template>
  <div class="contact-container">
    <h1>联系我们</h1>
    <a-form layout="vertical" :model="formState" :rules="rules" ref="formRef" @finish="onFinish">
      <a-form-item name="name" label="姓名">
        <a-input v-model:value="formState.name" placeholder="请输入您的姓名" />
      </a-form-item>
      <a-form-item name="email" label="邮箱">
        <a-input v-model:value="formState.email" placeholder="请输入您的邮箱" />
      </a-form-item>
      <a-form-item name="message" label="留言">
        <a-textarea v-model:value="formState.message" placeholder="请输入您的留言" rows="4" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">提交</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { message } from 'ant-design-vue'

const formRef = ref(null)
const formState = reactive({
  name: '',
  email: '',
  message: '',
})

const rules = {
  name: [{ required: true, message: '请输入您的姓名' }],
  email: [
    { required: true, message: '请输入您的邮箱' },
    { type: 'email', message: '请输入有效的邮箱地址' },
  ],
  message: [{ required: true, message: '请输入您的留言' }],
}

const onFinish = () => {
  message.success('提交成功！我们会尽快联系您。')
  formRef.value.resetFields()
}
</script>

<style scoped>
.contact-container {
  padding: 24px;
}

h1 {
  margin-bottom: 24px;
}
</style>
