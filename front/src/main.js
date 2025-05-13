import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// Создаем приложение
const app = createApp(App)

// Добавляем обработку ошибок
app.config.errorHandler = (err, vm, info) => {
  console.error('Vue Error:', err)
  console.error('Error Info:', info)
  console.error('Component:', vm)
}

// Добавляем предупреждения
app.config.warnHandler = (msg, vm, trace) => {
  console.warn('Vue Warning:', msg)
  console.warn('Component:', vm)
  console.warn('Trace:', trace)
}

// Инициализируем Pinia
const pinia = createPinia()
app.use(pinia)

// Инициализируем роутер
app.use(router)

// Монтируем приложение
app.mount('#app')

// Выводим информацию о состоянии приложения
console.log('App mounted successfully')
console.log('Router:', router)
console.log('Pinia:', pinia)
console.log('Current route:', router.currentRoute.value)
console.log('Available routes:', router.getRoutes()) 