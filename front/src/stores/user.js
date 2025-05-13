import { defineStore } from 'pinia'
import { userService } from '../services/api'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    loading: false,
    error: null
  }),
  
  actions: {
    async fetchUser() {
      this.loading = true
      try {
        const response = await userService.getProfile()
        this.user = response.data
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async updateProfile(profileData) {
      this.loading = true
      try {
        const response = await userService.updateProfile(profileData)
        this.user = response.data
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async login(credentials) {
      this.loading = true
      try {
        const response = await userService.login(credentials)
        localStorage.setItem('token', response.data.token)
        await this.fetchUser()
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async logout() {
      try {
        await userService.logout()
        localStorage.removeItem('token')
        this.user = null
      } catch (error) {
        this.error = error.message
      }
    }
  }
}) 