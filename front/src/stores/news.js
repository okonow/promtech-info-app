import { defineStore } from 'pinia'
import { newsService } from '../services/api'
import { ref } from 'vue'

export const useNewsStore = defineStore('news', () => {
  const news = ref([])
  const selectedNews = ref(null)
  const loading = ref(false)
  const error = ref(null)

  async function fetchNews() {
    loading.value = true
    error.value = null
    try {
      const response = await newsService.getAll()
      news.value = response.data
    } catch (err) {
      if (err.code === 'ECONNREFUSED') {
        error.value = 'Не удалось подключиться к серверу. Пожалуйста, проверьте, запущен ли бэкенд на порту 3000.'
      } else if (err.response) {
        error.value = `Ошибка сервера: ${err.response.status} ${err.response.statusText}`
      } else {
        error.value = err.message || 'Произошла неизвестная ошибка'
      }
      console.error('Error fetching news:', err)
    } finally {
      loading.value = false
    }
  }

  async function fetchNewsById(id) {
    loading.value = true
    error.value = null
    try {
      const response = await newsService.getById(id)
      selectedNews.value = response.data
    } catch (err) {
      if (err.code === 'ECONNREFUSED') {
        error.value = 'Не удалось подключиться к серверу. Пожалуйста, проверьте, запущен ли бэкенд на порту 3000.'
      } else if (err.response) {
        error.value = `Ошибка сервера: ${err.response.status} ${err.response.statusText}`
      } else {
        error.value = err.message || 'Произошла неизвестная ошибка'
      }
      console.error('Error fetching news by id:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    news,
    selectedNews,
    loading,
    error,
    fetchNews,
    fetchNewsById
  }
}) 