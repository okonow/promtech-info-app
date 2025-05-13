import { defineStore } from 'pinia'
import { documentsService } from '../services/api'

export const useDocumentsStore = defineStore('documents', {
  state: () => ({
    documents: [],
    sections: [],
    loading: false,
    error: null
  }),
  
  actions: {
    async fetchDocuments() {
      this.loading = true
      try {
        const response = await documentsService.getAll()
        this.documents = response.data
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async fetchDocumentsBySection(sectionId) {
      this.loading = true
      try {
        const response = await documentsService.getBySection(sectionId)
        this.documents = response.data
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async downloadDocument(id) {
      try {
        const response = await documentsService.download(id)
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', response.headers['content-disposition']?.split('filename=')[1] || 'document')
        document.body.appendChild(link)
        link.click()
        link.remove()
      } catch (error) {
        this.error = error.message
      }
    }
  }
}) 