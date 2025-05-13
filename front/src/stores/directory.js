import { defineStore } from 'pinia'
import { directoryService } from '../services/api'

export const useDirectoryStore = defineStore('directory', {
  state: () => ({
    contacts: [],
    selectedContact: null,
    loading: false,
    error: null
  }),
  
  actions: {
    async fetchContacts() {
      this.loading = true
      try {
        const response = await directoryService.getAll()
        this.contacts = response.data
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async searchContacts(query) {
      this.loading = true
      try {
        const response = await directoryService.search(query)
        this.contacts = response.data
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async fetchContactDetails(id) {
      this.loading = true
      try {
        const response = await directoryService.getById(id)
        this.selectedContact = response.data
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    }
  }
}) 