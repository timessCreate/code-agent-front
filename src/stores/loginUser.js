import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getLoginUser } from '@/api/userController.js'

export const useLoginUserStore = defineStore('loginUser', () => {
  // 默认值
  const loginUser = ref({
    userName: '未登录',
  })

  // 获取登录用户信息
  async function fetchLoginUser() {
    const res = await getLoginUser()
    if (res.data.code === 0 && res.data.data) {
      loginUser.value = res.data.data
    }
  }
  // 更新登录用户信息
  function setLoginUser(newLoginUser) {
    loginUser.value = newLoginUser
  }
  return { loginUser, setLoginUser, fetchLoginUser }
})
