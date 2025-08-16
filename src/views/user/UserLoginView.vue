<template>
  <div class="login-container">
    <canvas id="particle-background"></canvas>
    <div class="binary-code"></div>
    <div class="login-panel">
      <h1 class="login-title">欢迎登录</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username" class="form-label">账号</label>
          <input type="text" id="username" v-model="userAccount" class="form-input" required />
        </div>
        <div class="form-group">
          <label for="password" class="form-label">密码</label>
          <input type="password" id="password" v-model="userPassword" class="form-input" required />
        </div>
        <button type="submit" class="login-button">登录</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { userLogin } from '@/api/userController'
import { useRouter } from 'vue-router'
import { useLoginUserStore } from '@/stores/loginUser'
const userAccount = ref('')
const userPassword = ref('')
const router = useRouter()

const handleLogin = async () => {
  userLogin({ userAccount: userAccount.value, userPassword: userPassword.value })
    .then(async (response) => {
      if (response.data.code === 0) {
        await useLoginUserStore().fetchLoginUser()
        // 登录成功，处理后续逻辑
        router.push({ path: '/', replace: true })
      } else {
        // 登录失败，显示错误信息
        console.error('登录失败', response.data.message)
      }
    })
    .catch((error) => {
      console.error('登录请求出错', error)
    })
}

onMounted(() => {
  const canvas = document.getElementById('particle-background')
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const particles = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1,
    color: ['#00f3ff', '#8000ff', '#ffffff'][Math.floor(Math.random() * 3)],
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
  }))

  const drawParticles = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particles.forEach((particle) => {
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
      ctx.fillStyle = particle.color
      ctx.fill()
      particle.x += particle.dx
      particle.y += particle.dy

      if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1
      if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1
    })
    requestAnimationFrame(drawParticles)
  }

  drawParticles()
})
</script>

<style scoped>
.login-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(to bottom, #0d1b2a, #1b263b);
  overflow: hidden;
}

html,
body {
  margin: 0;
  height: 100%;
  overflow: hidden;
}

#particle-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.binary-code {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 10px,
    rgba(255, 255, 255, 0.1) 10px,
    rgba(255, 255, 255, 0.1) 20px
  );
}

.login-panel {
  position: relative;
  width: 400px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 0 15px #00f3ff;
}

.login-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 24px;
  color: #00f3ff;
  text-shadow: 0 0 15px #00f3ff;
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 8px;
  transition: color 0.5s;
}

.form-input {
  width: 100%;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  transition:
    background 0.5s,
    box-shadow 0.5s;
}

.form-input:focus {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 15px #00f3ff;
}

.login-button {
  width: 100%;
  padding: 15px;
  background: linear-gradient(45deg, #00f3ff, #0080ff);
  border: none;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.login-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 15px #00f3ff;
}
</style>
