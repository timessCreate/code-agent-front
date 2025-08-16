<template>
  <a-layout-header class="header">
    <div class="logo">
      <img src="/src/assets/logo.svg" alt="Logo" />
      <span class="site-title">编码通</span>
    </div>
    <a-menu
      v-model:selectedKeys="selectedKeys"
      mode="horizontal"
      :items="menuItems"
      class="menu"
      @click="handleMenuClick"
    />
    <div class="user-actions" v-if="loginUserStore.loginUser.id">
      <a-space>
        <a-avatar :src="loginUserStore.loginUser.avatar ?? '/src/assets/default-avatar.png'" />
        {{ loginUserStore.loginUser.userName ?? '无名' }}
      </a-space>
    </div>
    <div class="user-actions" v-else>
      <a-button type="primary" @click="navigateToLogin">登录</a-button>
    </div>
  </a-layout-header>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useLoginUserStore } from '@/stores/loginUser'
const router = useRouter()

const loginUserStore = useLoginUserStore()

// 菜单数据结构，包含路由路径
const menuItems = [
  { key: '1', label: '首页', path: '/' },
  { key: '2', label: '关于', path: '/about' },
  { key: '3', label: '服务', path: '/service' },
  { key: '4', label: '联系我们', path: '/contact' },
]

const selectedKeys = ref(['1'])

// 处理菜单点击事件
const handleMenuClick = ({ key }) => {
  // 查找对应的菜单项
  const menuItem = menuItems.find((item) => item.key === key)
  if (menuItem && menuItem.path) {
    // 更新选中状态
    selectedKeys.value = [key]
    // 跳转到对应页面
    router.push(menuItem.path)
  }
}

// 跳转到用户登录页面
const navigateToLogin = () => {
  router.push('/user/login')
}

// 初始化时根据当前路由设置选中的菜单项
onMounted(() => {
  const currentPath = router.currentRoute.value.path
  const menuItem = menuItems.find((item) => item.path === currentPath)
  if (menuItem) {
    selectedKeys.value = [menuItem.key]
  }
})
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo img {
  height: 40px;
}

.site-title {
  font-size: 18px;
  font-weight: bold;
}

.menu {
  flex: 1;
  margin: 0 20px;
}

.user-actions {
  display: flex;
  align-items: center;
}
</style>
