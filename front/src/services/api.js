import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request interceptor for adding auth token
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// Response interceptor for handling errors
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export const userService = {
  getProfile: () => api.get('/user/profile'),
  updateProfile: (data) => api.put('/user/profile', data),
  login: (credentials) => api.post('/auth/login', credentials),
  logout: () => api.post('/auth/logout')
}

export const notificationsService = {
  getAll: () => api.get('/notifications'),
  markAsRead: (id) => api.put(`/notifications/${id}/read`),
  markAllAsRead: () => api.put('/notifications/read-all')
}

export const documentsService = {
  getAll: () => api.get('/documents'),
  getBySection: (sectionId) => api.get(`/documents/section/${sectionId}`),
  download: (id) => api.get(`/documents/${id}/download`, { responseType: 'blob' })
}

export const directoryService = {
  getAll: () => api.get('/directory'),
  search: (query) => api.get(`/directory/search?q=${query}`),
  getById: (id) => api.get(`/directory/${id}`)
}

export const newsService = {
  getAll: () => api.get('/news'),
  getById: (id) => api.get(`/news/${id}`)
}

export default api 