import { defineStore } from 'pinia'
import { notificationsService } from '../services/api'

export const useNotificationsStore = defineStore('notifications', {
  state: () => ({
    notifications: [],
    loading: false,
    error: null
  }),
  
  actions: {
    async fetchNotifications() {
      this.loading = true
      try {
        const response = await notificationsService.getAll()
        this.notifications = response.data
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async markAsRead(notificationId) {
      try {
        await notificationsService.markAsRead(notificationId)
        const notification = this.notifications.find(n => n.id === notificationId)
        if (notification) {
          notification.read = true
        }
      } catch (error) {
        this.error = error.message
      }
    },

    async markAllAsRead() {
      try {
        await notificationsService.markAllAsRead()
        this.notifications.forEach(notification => {
          notification.read = true
        })
      } catch (error) {
        this.error = error.message
      }
    }
  }
}) 