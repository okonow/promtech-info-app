<template>
  <div class="top-bar">
    <div class="search-bar">
      <input 
        v-model="searchQuery" 
        type="text" 
        placeholder="Поиск..."
        @input="handleSearch"
      >
      <button class="search-btn"></button>
    </div>
    <div class="notifications">
      <button class="notif-btn" @click="toggleNotifications"></button>
      <span v-if="unreadCount > 0" class="notif-badge">{{ unreadCount }}</span>
    </div>
  </div>

  <div v-if="showNotifications" class="notif-panel">
    <div class="notif-panel-header">
      <h3>Уведомления</h3>
      <button class="notif-close-btn" @click="toggleNotifications"></button>
    </div>
    <div class="notif-container">
      <div v-for="notification in notifications" 
           :key="notification.id" 
           class="notification-item"
           :class="{ unread: !notification.read }"
           @click="markAsRead(notification.id)"
      >
        <div class="notification-content">
          <h4>{{ notification.title }}</h4>
          <p>{{ notification.message }}</p>
          <span class="notification-time">{{ formatTime(notification.time) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useNotificationsStore } from '../stores/notifications'

const notificationStore = useNotificationsStore()
const searchQuery = ref('')
const showNotifications = ref(false)

const notifications = computed(() => notificationStore.notifications)
const unreadCount = computed(() => notificationStore.unreadCount)

const handleSearch = () => {
  // Implement search functionality
  console.log('Searching for:', searchQuery.value)
}

const toggleNotifications = () => {
  showNotifications.value = !showNotifications.value
}

const markAsRead = (id) => {
  notificationStore.markAsRead(id)
}

const formatTime = (time) => {
  return new Intl.RelativeTimeFormat('ru', { numeric: 'auto' }).format(
    Math.round((time.getTime() - Date.now()) / (1000 * 60)),
    'minute'
  )
}
</script>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 20px;
  padding: 5px 15px;
  width: 300px;
}

.search-bar input {
  border: none;
  background: none;
  outline: none;
  width: 100%;
  padding: 5px;
}

.notifications {
  position: relative;
}

.notif-btn {
  width: 40px;
  height: 40px;
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
}

.notif-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #ff4444;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
}

.notif-panel {
  position: absolute;
  top: 100%;
  right: 0;
  width: 350px;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.notif-panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
}

.notif-container {
  max-height: 400px;
  overflow-y: auto;
}

.notification-item {
  padding: 15px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
}

.notification-item:hover {
  background-color: #f5f5f5;
}

.notification-item.unread {
  background-color: #f8f9fa;
}

.notification-content h4 {
  margin: 0 0 5px 0;
}

.notification-content p {
  margin: 0;
  color: #666;
}

.notification-time {
  font-size: 0.8em;
  color: #999;
  margin-top: 5px;
  display: block;
}
</style> 