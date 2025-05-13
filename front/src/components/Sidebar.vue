<template>
  <div class="sidebar">
    <div class="logo">OKB АКС</div>
    <div v-if="!isLoggedIn" class="login-curtain">
      <div class="image"></div>
      <form class="login" @submit.prevent="handleLogin">
        <h2 class="auth-title">Вход в систему</h2>
        <label for="login">Телефон или корпоративный логин</label>
        <input v-model="loginForm.login" name="login" placeholder="Введите логин" type="text">
        
        <label for="password">Пароль</label>
        <input v-model="loginForm.password" name="password" placeholder="••••••••" type="password">
        
        <p class="for-errors">{{ loginError }}</p>
        
        <button type="submit" class="primary">Войти</button>
        
        <div class="login-footer">
          <a href="#">Забыли пароль?</a> • <a href="#">Помощь при входе</a>
        </div>
      </form>
    </div>
    <nav v-else class="main-nav">
      <button 
        v-for="item in navItems" 
        :key="item.id"
        class="nav-btn"
        :class="{ active: currentRoute === item.route }"
        @click="navigate(item.route)"
      >
        <span :class="['icon', item.icon]"></span>
        <span class="label">{{ item.label }}</span>
      </button>
    </nav>
    <div v-if="isLoggedIn" class="user-profile">
      <div class="avatar"></div>
      <div class="user-info">
        <span class="user-name">{{ user.name }}</span>
        <span class="user-position">{{ user.position }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '../stores/user'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const isLoggedIn = computed(() => userStore.isLoggedIn)
const user = computed(() => userStore.user)
const currentRoute = computed(() => route.name)

const loginForm = ref({
  login: '',
  password: ''
})
const loginError = ref('')

const navItems = [
  { id: 'home', label: 'Главная', icon: 'home', route: 'home' },
  { id: 'docs', label: 'Документы', icon: 'docs', route: 'documents' },
  { id: 'map', label: 'Карта', icon: 'map', route: 'map' },
  { id: 'dir', label: 'Справочник', icon: 'dir', route: 'directory' },
  { id: 'prof', label: 'Профиль', icon: 'prof', route: 'profile' }
]

const navigate = (route) => {
  router.push({ name: route })
}

const handleLogin = async () => {
  try {
    await userStore.login(loginForm.value)
    loginError.value = ''
  } catch (error) {
    loginError.value = 'Неверный логин или пароль'
  }
}
</script>

<style scoped>
.sidebar {
  width: 280px;
  background-color: #fff;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.logo {
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid #e0e0e0;
}

.login-curtain {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.login {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.auth-title {
  margin-bottom: 20px;
}

.main-nav {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}

.nav-btn {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border: none;
  background: none;
  cursor: pointer;
  gap: 10px;
}

.nav-btn.active {
  background-color: #f0f0f0;
}

.user-profile {
  margin-top: auto;
  padding: 20px;
  border-top: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e0e0e0;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: bold;
}

.user-position {
  font-size: 0.9em;
  color: #666;
}
</style> 